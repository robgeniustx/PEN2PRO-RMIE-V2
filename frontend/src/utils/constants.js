const FALLBACK_LAUNCH_DAYS_OUT = 60;

const rawLaunchDate = import.meta.env.VITE_LAUNCH_DATE;

export const LAUNCH_DATE = rawLaunchDate
  ? new Date(`${rawLaunchDate}T09:00:00`)
  : new Date(Date.now() + FALLBACK_LAUNCH_DAYS_OUT * 24 * 60 * 60 * 1000);

export const LAUNCH_DATE_LABEL = LAUNCH_DATE.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});
