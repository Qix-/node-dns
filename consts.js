
exports.QUERY_TYPE = {
  A     : 0x01,
  NS    : 0x02,
  MD    : 0x03,
  MF    : 0x04,
  CNAME : 0x05,
  SOA   : 0x06,
  MB    : 0x07,
  MG    : 0x08,
  MR    : 0x09,
  NULL  : 0x0A,
  WKS   : 0x0B,
  PTR   : 0x0C,
  HINFO : 0x0D,
  MINFO : 0x0E,
  MX    : 0x0F,
  TXT   : 0x10,
  UINFO : 0x64,
  UID   : 0x65,
  GID   : 0x66,
  ANY   : 0xFF
};

exports.QUERY_CLASS = {
  IN    : 0x01,
  CSNET : 0x02,
  CHAOS : 0x03,
  HESIOD: 0x04,
  ANY   : 0xFF
};