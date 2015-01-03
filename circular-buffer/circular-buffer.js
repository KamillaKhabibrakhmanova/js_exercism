function circularBuffer(size) {
    var buffer = [];
    this.size = size;



    this.obj = {
    	read: function() {
    		if (buffer[0] == undefined) {
    			throw new bufferEmptyException;
    		} else {
    			return buffer.shift();
    		}
    	},
    	write: function(val) {
        if (val == undefined) {
          return;
        } else if (buffer.length === size) {
          throw new bufferFullException;
        } else { 
          buffer.push(val); 
    	 }
      },
      clear: function() {
        buffer = [];
      },
      forceWrite: function(val) {
        this.read();
        this.write(val);
      }
    }
    return this.obj;
}

function bufferEmptyException() {
  this.name = "BufferEmptyException";
  this.message = "Buffer is empty.";
};

function bufferFullException() {
  this.name = "BufferFullException";
  this.message = "Buffer is full.";
};


