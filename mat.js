var script_url = "https://script.google.com/macros/s/AKfycbzqmEPfuOwF6dNuICs3n22Q1u1uCihWs2GpymC4uCTKlkwaUVbuvocwqZEgTse3E2i5/exec";
var url = script_url + "?action=read1";

$.getJSON(url, function (json) {

    var pilih_banksoal = [];
    var pilih_ujian = [];
    var pilih_tugas = [];
    for (var i = 0; i < json.records.length; i++) {
        var tipe = json.records[i].tipe;
        switch (tipe) {
            case "bank soal":
                pilih_banksoal.push(i);
                break;
            case "tugas":
                pilih_tugas.push(i);
                break;
            case "ujian":
                pilih_ujian.push(i);
                break;
        }

    }


    var str1 = '';
    for (var i = 0; i < pilih_banksoal.length; i++) {
        value_banksoal = pilih_banksoal[i];

        var id = json.records[value_banksoal].id;
        var pelajaran = json.records[value_banksoal].pelajaran;
        var kelas = json.records[value_banksoal].kelas;
        var bab = json.records[value_banksoal].bab;
        var subbab = json.records[value_banksoal].subbab;
        var keterangan = json.records[value_banksoal].keterangan;
        var urlyoutube = json.records[value_banksoal].urlyoutube;
        var suhu = json.records[value_banksoal].suhu;
        var sumber = json.records[value_banksoal].sumber;
        var katakunci = json.records[value_banksoal].katakunci;
        var j = i + 1;

        switch (suhu) {
            case "low":
                iconsuhu =
                    `<img  src="https://raw.githubusercontent.com/AwiFatan/logo/master/thermometer-low.svg">`;
                break;
            case "half":
                iconsuhu =
                    `<img  src="https://raw.githubusercontent.com/AwiFatan/logo/master/thermometer-half.svg">`;
                break;
            case "high":
                iconsuhu =
                    `<img  src="https://raw.githubusercontent.com/AwiFatan/logo/master/thermometer-high.svg">`;
                break;
            default:
                iconsuhu = ``;
                break;



        }

        var urlyoutube = urlyoutube.replace('https://youtu.be/', '');
        var urlyoutube = urlyoutube.replace('https://www.youtube.com/watch?v=', '');
        var html_yt = `
        
        <div class="col-lg-6 col-md-12">
                <div class="card mt-2 mb-2 border-success" id="` + id + `">
                    <div class="vplayer" data-v="` + urlyoutube + `">
                        <div class="plybtn"></div>
                    </div>
                    <div class="card-body">
                        
                        <h5 id="judul_` + j + `" class="card-title"><span id="iconsuhu_` + j + `">` + iconsuhu + `</span> <span id="syiarke_` + j + `">` + j + `</span>. <span id="bab_` + j + `">` + bab + `</span> | <span id="kelas_` + j + `">` + kelas + `</span> | <span id="pelajaran_` + j + `">` + pelajaran + `</span></h5>
                        <p id="deskripsi_` + j + `" class="card-text"><span id="subbab_` + j + `">` + subbab + `</span><br><span id="keterangan_` + j + `">` + keterangan + `</span></p>
                        <p><span id="sumber_` + j + `">` + sumber + `</p>
                        <p><span id="katakunci_` + j + `">` + katakunci + `</p>
                        <a id="urlyoutube_` + j + `" href="https://www.youtube.com/watch?v=` + urlyoutube + `" class="btn btn-primary mb-2 text-capitalize" target="_blank">Watch on Youtube</a>
                        <div id="syiar" class="syiar">
                            <span class="share">syiar : </span>
                            <button id="kopi_` + j + `" class="btn socmed" onclick="af(this.id)"><img
                                    src="https://raw.githubusercontent.com/AwiFatan/logo/master/copy.svg"></button>
                            <button id="facebook_` + j + `" class="btn socmed" onclick="af(this.id)"><img
                                    src="https://raw.githubusercontent.com/AwiFatan/logo/b5339684a24fe574a7724654e19123edf5a167f6/facebook.svg"></button>
                            <button id="whatsapp_` + j + `" class="btn socmed" onclick="af(this.id)"><img
                                    src="https://raw.githubusercontent.com/AwiFatan/logo/b5339684a24fe574a7724654e19123edf5a167f6/whatsapp.svg"></button>
                            <button id="telegram_` + j + `" class="btn socmed" onclick="af(this.id)"><img
                                    src="https://raw.githubusercontent.com/AwiFatan/logo/b5339684a24fe574a7724654e19123edf5a167f6/telegram.svg"></button>
                            <button id="twitter_` + j + `" class="btn socmed" onclick="af(this.id)"><img
                                    src="https://raw.githubusercontent.com/AwiFatan/logo/b5339684a24fe574a7724654e19123edf5a167f6/twitter.svg"></button>
                        </div>
                    </div>
                </div>
           </div>
           
`
        str1 += html_yt;

    }

    document.getElementById("videoyoutube").innerHTML = str1;



});


function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

iframeyoutube()

async function iframeyoutube() {
    await wait(3000);
    var vplayer = document.querySelectorAll(".vplayer");
    // console.log(vplayer)
    for (var i = 0; i < vplayer.length; i++) {
        // console.log(vplayer[i].dataset.v);
        var source = "https://img.youtube.com/vi/" + vplayer[i].dataset.v + "/maxresdefault.jpg";
        // maxresdefault.jpg
        // sddefault.jpg
        // mqdefault.jpg
        // hqdefault.jpg
        // default.jpg
        // console.log(source);

        var image = new Image();
        image.src = source;
        image.addEventListener("load", function () {
            vplayer[i].appendChild(image);
        }(i));

        vplayer[i].addEventListener("click", function () {

            var iframe = document.createElement("iframe");

            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("width", "320");
            iframe.setAttribute("height", "180");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.v + "");
            // ?rel=0&showinfo=0&mute=0
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    };

};
