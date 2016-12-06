const assert = require('assert');
const Packet = require('../packet');

var request = new Buffer([ 
0x29 ,0x64 ,0x01 ,0x00 ,0x00 ,0x01 ,0x00 ,0x00,
0x00 ,0x00 ,0x00 ,0x00 ,0x03 ,0x77 ,0x77 ,0x77,
0x01 ,0x7a ,0x02 ,0x63 ,0x6e ,0x00 ,0x00 ,0x01,
0x00 ,0x01 ]);

var response = new Buffer([ 
0x29, 0x64, 0x81, 0x80, 0x00, 0x01, 0x00, 0x01, 
0x00, 0x00, 0x00, 0x00, 0x03, 0x77, 0x77, 0x77, 
0x01, 0x7a, 0x02, 0x63, 0x6e, 0x00, 0x00, 0x01, 
0x00, 0x01, 0xc0, 0x0c, 0x00, 0x01, 0x00, 0x01, 
0x00, 0x00, 0x01, 0x90, 0x00, 0x04, 0x36, 0xde, 
0x3c, 0xfc ]);

describe('DNS Packet', function(){
  
  it('Name#decode', function(){
    
    var name = Packet.Name.parse(response);
    assert.equal(name.offset, 21);
    assert.equal(name.value, 'www.z.cn');
    
    var name = Packet.Name.parse(response, 26);
    assert.equal(name.offset, 28);
    assert.equal(name.value, 'www.z.cn');
    
  });
  
  it('Name#encode', function(){
    var name = new Packet.Name('www.google.com');
    var pattern = [ 3,'w','w','w',5,'g','o','o','g','l','e',3,'c','o','m' ];
    assert.equal(name.toBuffer().length, pattern.length);
    
  });
  
  it('Header#encode', function(){
    var header = new Packet.Header({ id: 0x2964 });
    assert.deepEqual(header.toBuffer(), new Buffer([0x29, 0x64, 0x00,0x00]));
  });
  
  it('Header#decode', function(){
    var header = Packet.Header.parse(response);
    assert.equal(header.id, 0x2964);
    assert.equal(header.qr, 1);
  });
  
  it('Header#parse', function(){
    var packet = Packet.parse(response);
    assert.equal(packet.questions[0].name, 'www.z.cn');
  });
  
});