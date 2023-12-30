import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://skiduluth.com",
  integrations: [mdx(), sitemap()],
  // redirects: {
  //   "/?p=11": "/ski-with-your-dogs/",
  //   "/?p=13": "/tent-camping/",
  //   "/?p=15": "/trails/",
  //   "/?p=196": "/",
  //   "/?p=237": "/",
  //   "/?p=254": "/",
  //   "/?p=276": "/",
  //   "/?p=280": "/",
  //   "/?p=288": "/",
  //   "/?p=298": "/",
  //   "/?p=30": "/",
  //   "/?p=341": "/",
  //   "/?p=355": "/kidski/",
  //   "/?p=363": "/",
  //   "/?p=381": "/",
  //   "/?p=383": "/",
  //   "/?p=391": "/",
  //   "/?p=411": "/",
  //   "/?p=417": "/",
  //   "/?p=419": "/",
  //   "/?p=427": "/",
  //   "/?p=432": "/",
  //   "/?p=436": "/",
  //   "/?p=438": "/",
  //   "/?p=442": "/",
  //   "/?p=446": "/",
  //   "/?p=450": "/",
  //   "/?p=455": "/",
  //   "/?p=466": "/",
  //   "/?p=469": "/",
  //   "/?p=473": "/",
  //   "/?p=478": "/",
  //   "/?p=490": "/",
  //   "/?p=492": "/",
  //   "/?p=5": "/",
  //   "/?p=570": "/",
  //   "/?p=572": "/",
  //   "/?p=7": "/nordic-skiing/",
  //   "/?p=9": "/season-pass-form/",
  //   "/author/10fold2/": "/",
  //   "/author/10fold2/feed/": "/",
  //   "/author/snowflake/": "/",
  //   "/author/snowflake/feed/": "/",
  //   "/author/snowflake/page/2/": "/",
  //   "/author/snowflake/page/3/": "/",
  //   "/category/news/": "/",
  //   "/category/news/feed/": "/",
  //   "/category/uncategorized/": "/",
  //   "/category/uncategorized/feed/": "/",
  //   "/category/uncategorized/page/2/": "/",
  //   "/category/uncategorized/page/3/": "/",
  //   "/comments/feed/": "/",
  //   "/feed/": "/",
  //   "/news/kidski-2020/": "/",
  //   "/news/snowflake-201718-season-news-update/": "/",
  //   "/news/snowflake-2018-19-season-news-update/": "/",
  //   "/news/snowflake-looks-forward-to-a-fabulous-20172018-ski-season/": "/",
  //   "/news/snowflake-nordic-ski-club-201617-membership-news/": "/",
  //   "/news/snowflake-season-pass-forms-now-available/": "/",
  //   "/page/2/": "/",
  //   "/page/3/": "/",
  //   "/page/4/": "/",
  //   "/robots.txt": "/",
  //   "/uncategorized/2022-kidski-form-available-now/": "/",
  //   "/uncategorized/bad-news/": "/",
  //   "/uncategorized/friday-january-8th/": "/",
  //   "/uncategorized/happy-thanksgiving/": "/",
  //   "/uncategorized/kidski-2023-information-posted/": "/",
  //   "/uncategorized/last-week-for-early-bird-pricing/": "/",
  //   "/uncategorized/membership-trail-update-15-nov-2019/": "/",
  //   "/uncategorized/new-dog-policy-for-the-2023-24-ski-season/": "/",
  //   "/uncategorized/pre-season-update-2023-24/": "/",
  //   "/uncategorized/proctor-invite-and-trail-closures-on-10-11-december/": "/",
  //   "/uncategorized/ski-rental-and-trail-status-update/": "/",
  //   "/uncategorized/snowflake-2019-20-season-news-update/": "/",
  //   "/uncategorized/snowflake-2020-21-pre-season-news/": "/",
  //   "/uncategorized/snowflake-2021-22-pre-season-news/": "/",
  //   "/uncategorized/snowflake-2022-23-pre-season-news/": "/",
  //   "/uncategorized/snowflake-camping-2021/": "/",
  //   "/uncategorized/snowflake-contact-information/": "/",
  //   "/uncategorized/snowflake-kidski-2021-update-14-january-2021/": "/",
  //   "/uncategorized/snowflake-kidski-2021-update/": "/",
  //   "/uncategorized/spring-hours-begin-tuesday-3-15/": "/",
  //   "/uncategorized/trail-update-11-17-2020/": "/",
  //   "/uncategorized/virtual-2021-birkie-at-snowflake/": "/",
  //   "/uncategorized/virtual-birkie-at-snowflake/": "/",
  //   "/uncategorized/volunteer-for-snowflake-kidski-2022/": "/",
  //   "/uncategorized/volunteer-to-coach-snowflake-kidski-2023/": "/",
  //   "/wp-content/uploads/2018_19-Season-Pass-Application-Google-Docs.pdf": "/",
  //   "/wp-content/uploads/Final-Draft-2019_20-Season-Pass-Application-Documentos-de-Google.pdf":
  //     "/",
  //   "/wp-content/uploads/IMG_4386.jpg": "/",
  //   "/wp-content/uploads/IMG_7368-e1573856572831-225x300.jpg": "/",
  //   "/wp-content/uploads/IMG_7368-e1573856572831-768x1024.jpg": "/",
  //   "/wp-content/uploads/IMG_7374-e1573856297945-225x300.jpg": "/",
  //   "/wp-content/uploads/IMG_7374-e1573856297945-768x1024.jpg": "/",
  //   "/wp-content/uploads/IMG_7376-225x300.jpg": "/",
  //   "/wp-content/uploads/IMG_7376-768x1024.jpg": "/",
  //   "/wp-content/uploads/IMG_7806-1024x809.jpeg": "/",
  //   "/wp-content/uploads/IMG_7806-300x237.jpeg": "/",
  //   "/wp-content/uploads/IMG_7806-768x607.jpeg": "/",
  //   "/wp-content/uploads/IMG_7809-230x300.jpeg": "/",
  //   "/wp-content/uploads/IMG_7809-768x1002.jpeg": "/",
  //   "/wp-content/uploads/IMG_7809-785x1024.jpeg": "/",
  //   "/wp-content/uploads/IMG_7810-236x300.jpeg": "/",
  //   "/wp-content/uploads/IMG_7810-768x976.jpeg": "/",
  //   "/wp-content/uploads/IMG_7810-806x1024.jpeg": "/",
  //   "/wp-content/uploads/IMG_7813-221x300.jpeg": "/",
  //   "/wp-content/uploads/IMG_7813-755x1024.jpeg": "/",
  //   "/wp-content/uploads/IMG_7813-768x1041.jpeg": "/",
  //   "/wp-content/uploads/IMG_7814-1024x776.jpeg": "/",
  //   "/wp-content/uploads/IMG_7814-300x227.jpeg": "/",
  //   "/wp-content/uploads/IMG_7814-768x582.jpeg": "/",
  //   "/wp-content/uploads/IMG_7814.jpeg": "/",
  //   "/wp-content/uploads/Snowflake-KidSki-2020-Registration-Form.pdf": "/",
  //   "/wp-content/uploads/Snowflake-Map-to-Print-.pdf": "/",
  //   "/wp-content/uploads/Trailhead-28-Jan-18.jpg": "/",
  //   "/wp-content/uploads/skating-sundown.jpg": "/",
  //   "/wp-json/": "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fabout%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fabout%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fkidski%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fkidski%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fkidski-2020%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fkidski-2020%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fsnowflake-201718-season-news-update%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fsnowflake-201718-season-news-update%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fsnowflake-2018-19-season-news-update%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fsnowflake-2018-19-season-news-update%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fsnowflake-looks-forward-to-a-fabulous-20172018-ski-season%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fsnowflake-looks-forward-to-a-fabulous-20172018-ski-season%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fsnowflake-nordic-ski-club-201617-membership-news%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fsnowflake-nordic-ski-club-201617-membership-news%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fsnowflake-season-pass-forms-now-available%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnews%2Fsnowflake-season-pass-forms-now-available%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnordic-skiing%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fnordic-skiing%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fseason-pass-form%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fseason-pass-form%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fski-with-your-dogs%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fski-with-your-dogs%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Ftent-camping%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Ftent-camping%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Ftrails%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Ftrails%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2F2022-kidski-form-available-now%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2F2022-kidski-form-available-now%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fbad-news%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fbad-news%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Ffriday-january-8th%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Ffriday-january-8th%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fhappy-thanksgiving%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fhappy-thanksgiving%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fkidski-2023-information-posted%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fkidski-2023-information-posted%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Flast-week-for-early-bird-pricing%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Flast-week-for-early-bird-pricing%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fmembership-trail-update-15-nov-2019%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fmembership-trail-update-15-nov-2019%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fnew-dog-policy-for-the-2023-24-ski-season%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fnew-dog-policy-for-the-2023-24-ski-season%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fpre-season-update-2023-24%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fpre-season-update-2023-24%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fproctor-invite-and-trail-closures-on-10-11-december%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fproctor-invite-and-trail-closures-on-10-11-december%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fski-rental-and-trail-status-update%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fski-rental-and-trail-status-update%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-2019-20-season-news-update%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-2019-20-season-news-update%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-2020-21-pre-season-news%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-2020-21-pre-season-news%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-2021-22-pre-season-news%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-2021-22-pre-season-news%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-2022-23-pre-season-news%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-2022-23-pre-season-news%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-camping-2021%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-camping-2021%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-contact-information%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-contact-information%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-kidski-2021-update%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-kidski-2021-update%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-kidski-2021-update-14-january-2021%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fsnowflake-kidski-2021-update-14-january-2021%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fspring-hours-begin-tuesday-3-15%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fspring-hours-begin-tuesday-3-15%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Ftrail-update-11-17-2020%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Ftrail-update-11-17-2020%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fvirtual-2021-birkie-at-snowflake%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fvirtual-2021-birkie-at-snowflake%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fvirtual-birkie-at-snowflake%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fvirtual-birkie-at-snowflake%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fvolunteer-for-snowflake-kidski-2022%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fvolunteer-for-snowflake-kidski-2022%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fvolunteer-to-coach-snowflake-kidski-2023%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Funcategorized%2Fvolunteer-to-coach-snowflake-kidski-2023%2F&format=xml":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fupcoming-events%2F":
  //     "/",
  //   "/wp-json/oembed/1.0/embed?url=http%3A%2F%2Fwww.skiduluth.com%2Fupcoming-events%2F&format=xml":
  //     "/",
  //   // "/xmlrpc.php": "/",
  //   // "/xmlrpc.php?rsd": "/",
  // },
});
