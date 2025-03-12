(() => {
  // <stdin>
  var textEncoder = new TextEncoder();
  var table = document.getElementById("table");
  var rows = table.getElementsByTagName("tr");
  var hashRow = document.getElementById("hash").children[0].children[0].children;
  async function update(text) {
    const hash = await crypto.subtle.digest("SHA-256", textEncoder.encode(text)).then((hashBuffer) => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray;
    });
    var i = 0;
    hash.forEach((byte) => {
      for (var j = 0; j < 8; j++) {
        var bitwiseAnd = byte & Math.pow(2, j);
        if (bitwiseAnd > 0) {
          rows[7 - j].children[i].children[0].className = "set";
        } else {
          rows[7 - j].children[i].children[0].className = "";
        }
      }
      i++;
    });
    for (var i = 0; i < 32; i++) {
      var byteString = hash[i].toString(16).padStart(2, "0");
      hashRow[i].children[0].innerHTML = byteString;
    }
  }
  async function draw(id, texts) {
    const staticTable = document.getElementById(id);
    const staticRows = staticTable.getElementsByTagName("tr");
    const hashes = texts.map(async (text) => {
      return await crypto.subtle.digest("SHA-256", textEncoder.encode(text)).then((hashBuffer) => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray;
      });
    });
    var opacityValues = [
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    ];
    Promise.all(hashes).then((values) => {
      values.forEach((hash) => {
        var i2 = 0;
        hash.forEach((byte) => {
          for (var j2 = 0; j2 < 8; j2++) {
            var bitwiseAnd = byte & Math.pow(2, j2);
            if (bitwiseAnd > 0) {
              staticRows[7 - j2].children[i2].children[0].className = "set";
              opacityValues[7 - j2][i2] += 1 / texts.length;
            }
          }
          i2++;
        });
      });
      for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 32; j++) {
          staticRows[i].children[j].children[0].style.opacity = opacityValues[i][j];
        }
      }
    });
  }
  document.addEventListener(
    "DOMContentLoaded",
    function() {
      update("");
      draw("hash-a", ["a"]);
      draw("hash-c", ["c"]);
      draw("hash-a-c", ["a", "c"]);
    },
    false
  );
  window.textEncoder = textEncoder;
  window.rows = rows;
  window.update = update;
  window.hashRow = hashRow;
})();
