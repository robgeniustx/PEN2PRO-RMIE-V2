const AdminRoute=({children})=>{
  const enabled=(import.meta.env.VITE_ADMIN_DASHBOARD_ENABLED||"false").toLowerCase()==="true";
  // TODO: enforce real admin auth + RBAC in a future phase.
  if(!enabled) return <div className="p-8 text-white bg-slate-950">Admin dashboard is disabled.</div>;
  return children;
};
export default AdminRoute;
