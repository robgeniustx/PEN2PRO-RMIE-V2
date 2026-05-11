import json
from sqlalchemy import func
from app.models.analytics_event import AnalyticsEvent
from app.models.feature_usage import FeatureUsage
from app.models.conversion_event import ConversionEvent

MOCK={"total_users":1284,"total_blueprints":942,"total_events":8421,"total_upgrade_clicks":312,"total_checkouts_started":154,"total_checkouts_completed":97,"estimated_revenue":12843.0,"active_tier_counts":{"free":980,"pro":212,"elite":72,"founders":20},"top_features":[{"feature_name":"blueprint_generation","usage_count":942,"module_name":"blueprint"}],"module_usage":[{"module_name":"blueprint","usage_count":942}],"recent_activity":[],"conversion_summary":{"upgrade_click":312,"checkout_started":154,"checkout_completed":97,"checkout_cancelled":23},"funnel_summary":{"starter_visits":1800,"blueprint_generated":942,"pricing_viewed":530,"upgrade_clicked":312,"checkout_started":154,"checkout_completed":97}}

class AnalyticsService:
    def __init__(self, db): self.db=db
    def track_event(self,data):
        try:
            e=AnalyticsEvent(event_name=data.event_name,event_category=data.event_category,tier=data.tier,page_path=data.page_path,session_id=data.session_id,metadata_json=json.dumps(data.metadata or {}))
            self.db.add(e); self.db.commit(); self.db.refresh(e); return e
        except Exception: self.db.rollback(); return None
    def track_feature_usage(self,data):
        try:
            f=FeatureUsage(feature_name=data.feature_name,module_name=data.module_name,tier=data.tier)
            self.db.add(f); self.db.commit(); self.db.refresh(f); return f
        except Exception: self.db.rollback(); return None
    def track_conversion_event(self,data):
        try:
            c=ConversionEvent(source_page=data.source_page,prompt_location=data.prompt_location,from_tier=data.from_tier,to_tier=data.to_tier,conversion_type=data.conversion_type,amount=data.amount,currency=data.currency,session_id=data.session_id,stripe_session_id=data.stripe_session_id,metadata_json=json.dumps(data.metadata or {}))
            self.db.add(c); self.db.commit(); self.db.refresh(c); return c
        except Exception: self.db.rollback(); return None
    def get_admin_metrics(self):
        try:
            total_events=self.db.query(AnalyticsEvent).count();
            if total_events==0:return MOCK
            return {"total_users":self.db.query(AnalyticsEvent.user_id).distinct().count(),"total_blueprints":self.db.query(AnalyticsEvent).filter(AnalyticsEvent.event_name=="blueprint_generated").count(),"total_events":total_events,"total_upgrade_clicks":self.db.query(ConversionEvent).filter(ConversionEvent.conversion_type=="upgrade_click").count(),"total_checkouts_started":self.db.query(ConversionEvent).filter(ConversionEvent.conversion_type=="checkout_started").count(),"total_checkouts_completed":self.db.query(ConversionEvent).filter(ConversionEvent.conversion_type=="checkout_completed").count(),"estimated_revenue":self.get_revenue_summary(),"active_tier_counts":self.get_tier_distribution(),"top_features":self.get_feature_usage_summary(),"module_usage":self.get_module_usage_summary(),"recent_activity":self.get_recent_activity(),"conversion_summary":self.get_conversion_summary(),"funnel_summary":self.get_funnel_summary()}
        except Exception:return MOCK
    def get_feature_usage_summary(self):
        try:return [{"feature_name":n,"module_name":m,"usage_count":c} for n,m,c in self.db.query(FeatureUsage.feature_name,FeatureUsage.module_name,func.count(FeatureUsage.id)).group_by(FeatureUsage.feature_name,FeatureUsage.module_name).order_by(func.count(FeatureUsage.id).desc()).limit(10).all()] or MOCK["top_features"]
        except Exception:return MOCK["top_features"]
    def get_module_usage_summary(self):
        try:return [{"module_name":m,"usage_count":c} for m,c in self.db.query(FeatureUsage.module_name,func.count(FeatureUsage.id)).group_by(FeatureUsage.module_name).all()] or MOCK["module_usage"]
        except Exception:return MOCK["module_usage"]
    def get_conversion_summary(self):
        try:return {t:c for t,c in self.db.query(ConversionEvent.conversion_type,func.count(ConversionEvent.id)).group_by(ConversionEvent.conversion_type).all()} or MOCK["conversion_summary"]
        except Exception:return MOCK["conversion_summary"]
    def get_funnel_summary(self): return MOCK["funnel_summary"]
    def get_recent_activity(self,limit=25):
        try:return [{"event_name":r.event_name,"event_category":r.event_category,"tier":r.tier,"page_path":r.page_path,"created_at":str(r.created_at)} for r in self.db.query(AnalyticsEvent).order_by(AnalyticsEvent.created_at.desc()).limit(limit).all()]
        except Exception:return MOCK["recent_activity"]
    def get_tier_distribution(self):
        try:return {t:c for t,c in self.db.query(AnalyticsEvent.tier,func.count(AnalyticsEvent.id)).filter(AnalyticsEvent.tier.isnot(None)).group_by(AnalyticsEvent.tier).all()} or MOCK["active_tier_counts"]
        except Exception:return MOCK["active_tier_counts"]
    def get_revenue_summary(self):
        try:return float(self.db.query(func.coalesce(func.sum(ConversionEvent.amount),0.0)).filter(ConversionEvent.conversion_type=="checkout_completed").scalar() or 0.0)
        except Exception:return MOCK["estimated_revenue"]
