var fs = require("fs");

var arlista = fs.readFileSync("arlista.json");

// console.log(JSON.parse(arlista));

arlista = JSON.parse(arlista);
var formatted = arlista.map((item) => {
    var ar = item["brutto ar"].split(" ");
    ar = ar.slice(0, ar.length - 1);
    ar = ar.join("");
    return {
        kategoria: item.kategoria,
        tipus: item.gyarto + " - " + item.tipus,
        ar
    }
});

// console.log(formatted);

var CPUs = formatted.filter(item => item.kategoria.includes("CPU"));
fs.writeFileSync("cpu.json", JSON.stringify(CPUs));

var GPUs = formatted.filter(item => item.kategoria.includes("VGA"));
fs.writeFileSync("gpu.json", JSON.stringify(GPUs));

var mobos = formatted.filter(item => item.kategoria.includes("Alaplap"));
fs.writeFileSync("motherboard.json", JSON.stringify(mobos));

var RAMs = formatted.filter(item => item.kategoria.includes("RAM"));
fs.writeFileSync("ram.json", JSON.stringify(RAMs));

var SSDs = formatted.filter(item => item.kategoria.includes("SSD"));
fs.writeFileSync("ssd.json", JSON.stringify(SSDs));

var HDDs = formatted.filter(item => item.kategoria.includes("HDD"));
fs.writeFileSync("hdd.json", JSON.stringify(HDDs));

var PSUs = formatted.filter(item => item.kategoria.includes("Tápegység"));
fs.writeFileSync("psu.json", JSON.stringify(PSUs));

var cases = formatted.filter(item => item.kategoria.includes("Ház"));
fs.writeFileSync("case.json", JSON.stringify(cases));