// import Cookies from 'js-cookie';
import GetPreferences from "./preferances";
export default function cookiegenerator() {
	return [
		{
			name: "session_id",
			value: Math.random().toString(36).slice(2),
			domain: window.location.hostname,
			// path: window.location.href,
			path: window.location.pathname,
			expires: new Date(Date.now() + Math.random() * 1e10),
			httpOnly: Math.random() < 0.5,
			secure: Math.random() < 0.5,
			sameSite: ["Lax", "Strict", "none"][Math.floor(Math.random() * 3)],
		},
		{
			name: "preferences",
			value: GetPreferences(),
			domain: window.location.hostname,
			// path: window.location.href,
			path: window.location.pathname,
			expires: new Date(Date.now() + Math.random() * 1e10),
			httpOnly: Math.random() < 0.5,
			secure: Math.random() < 0.5,
			sameSite: ["Lax", "Strict", "none"][Math.floor(Math.random() * 3)],
		},
		{
			name: "analytics_id",
			value: `GA1.2.${Math.floor(Math.random() * 1e10)}.${Math.floor(
				Math.random() * 1e10
			)}`,
			domain: window.location.hostname,
			// path: window.location.href,
			path: window.location.pathname,
			expires: new Date(Date.now() + Math.random() * 1e10),
			httpOnly: Math.random() < 0.5,
			secure: Math.random() < 0.5,
			sameSite: ["Lax", "Strict", "none"][Math.floor(Math.random() * 3)],
		},
	];
}

// [
//     {
//       "name": "session_id",
//       "value": "ab12cd34ef56gh78",
//       "domain": "example.com",
//       "path": "/",
//       "expires": "2025-12-01T10:30:00Z",
//       "httpOnly": true,
//       "secure": true,
//       "sameSite": "Lax"
//     },
//     {
//       "name": "preferences",
//       "value": "{\"theme\":\"dark\",\"languclickCounter\":\"en\"}",
//       "domain": "example.com",
//       "path": "/",
//       "expires": "2026-01-01T00:00:00Z",
//       "httpOnly": false,
//       "secure": false,
//       "sameSite": "Strict"
//     },
//     {
//       "name": "analytics_id",
//       "value": "GA1.2.1234567890.987654321",
//       "domain": ".example.com",
//       "path": "/",
//       "expires": "2027-03-15T12:00:00Z",
//       "httpOnly": false,
//       "secure": true,
//       "sameSite": "None"
//     }
//   ]
//
