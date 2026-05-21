export const mockActivity = [
  {
    id: 1,
    type: "roadmap",
    message: "Robert Green generated a Pressure Washing Business roadmap",
    user: "robert@pen2pro.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
  },
  {
    id: 2,
    type: "signup",
    message: "New waitlist signup — Pro tier interest",
    user: "newuser@example.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: 3,
    type: "lead",
    message: "New lead added to pipeline: Maria Santos",
    user: "robert@pen2pro.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
  },
  {
    id: 4,
    type: "upgrade",
    message: "User upgraded from Free to Pro",
    user: "james.k@example.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
  },
  {
    id: 5,
    type: "roadmap",
    message: "Lawn Care & Landscaping roadmap generated",
    user: "tony@example.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
  },
];

export default mockActivity;
