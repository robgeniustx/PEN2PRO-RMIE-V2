CRM_PERMISSIONS = {
    'free': {'crm_access': False},
    'pro': {'crm_access': True, 'lead_scoring': False, 'pipeline_board': False},
    'elite': {'crm_access': True, 'lead_scoring': True, 'pipeline_board': True},
    'founders': {'crm_access': True, 'lead_scoring': True, 'pipeline_board': True, 'automation_placeholders': True},
}
