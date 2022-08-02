export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'UA-217853254-1'
// log the pageview with their URL
export const pageview = (url) => {
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
    });
};

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag("event", action, params);
};

export default {
    pageview,
    event,
};
