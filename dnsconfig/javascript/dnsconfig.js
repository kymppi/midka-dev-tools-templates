var REG_NONE = NewRegistrar('none', 'NONE');
var DNS_CLOUDFLARE = NewDnsProvider('cloudflare', 'CLOUDFLAREAPI');

var CF_PROXY_DEFAULT_ON = { cloudflare_proxy_default: 'on' };
var CF_PROXY_OFF = { cloudflare_proxy: 'off' }; // Proxy disabled.
var CF_PROXY_ON = { cloudflare_proxy: 'on' }; // Proxy enabled.

require_glob('./domains');
