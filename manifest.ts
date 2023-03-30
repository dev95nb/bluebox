import packageJson from "./package.json";

const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: packageJson.name,
  version: packageJson.version,
  description: packageJson.description,
  options_page: "src/pages/options/index.html",
  background: {
    service_worker: "src/pages/background/index.js",
  },
  permissions: ["webRequest", "storage", "scripting", "background", "cookies"],
  host_permissions: ["http://*/*", "https://*/*","<all_urls>"],
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*","<all_urls>"],
      js: ["src/pages/content/index.js"],
      run_at: "document_start",
    },
  ],
  icons: {
    "16": "icon-34.png",
    "32": "icon-34.png",
    "48": "icon-34.png",
    "128": "icon-34.png",
  },
  action: {
    default_icon: {
      "16": "icon-34.png",
      "32": "icon-34.png",
      "48": "icon-34.png",
      "128": "icon-34.png",
    },
    default_popup: "src/pages/popup/index.html",
  },
  devtools_page: "src/pages/devtools/index.html",
  content_security_policy: {
    extension_pages: "script-src 'self'; object-src 'self'",
  },
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "icon-128.png",
        "icon-34.png",
      ],
      matches: ["http://*/*", "https://*/*","<all_urls>"],
    },
  ],
};

export default manifest;
