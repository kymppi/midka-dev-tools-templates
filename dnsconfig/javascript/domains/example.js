D(
  'domain.com',
  REG_NONE,
  NO_PURGE,
  DnsProvider(DNS_CLOUDFLARE),
  CF_PROXY_DEFAULT_ON, // default to cloudflare proxy on

  // Records
  A('@', '1.1.1.1', CF_PROXY_OFF) // root domain to 1.1.1.1 with proxy off
);
