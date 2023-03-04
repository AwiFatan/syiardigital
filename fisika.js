
        function af(clicked_id) {
            var xxx = clicked_id.replace(/_/g, ',');
            var xxx = xxx.split(',');

            var socmed = xxx[0];
            var syiarke = xxx[1];

            // var socmed = "whatsapp"; //untuk test
            // var syiarke = "1"; //untuk test

            var syiarpelajaran = document.getElementById('pelajaran_' + syiarke).textContent;
            var syiarkelas = document.getElementById('kelas_' + syiarke).textContent;
            var syiarbab = document.getElementById('bab_' + syiarke).textContent;
            var syiarjudul = document.getElementById('judul_' + syiarke).textContent;
            syiarjudul = syiarjudul.trim()

            var syiarsubbab = document.getElementById('subbab_' + syiarke).textContent;
            var syiarketerangan = document.getElementById('keterangan_' + syiarke).textContent;
            var syiardeskripsi = document.getElementById('deskripsi_' + syiarke).textContent;

            var syiarurl = document.getElementById('urlyoutube_' + syiarke).href;

            // var syiarbersama = document.getElementById('judul_' + syiarke).textContent;

            // alert(syiarjudul)
            // alert(syiardeskripsi)
            // alert(syiarurl)

            quoteFBandTweet = syiarjudul + '%0A%0A' + syiarsubbab + '%0A%0A' + syiarketerangan;
            quoteFBpanjang = quoteFBandTweet.length;
            quoteWA = '*' + syiarjudul + '*%0A%0A' + syiarsubbab + '%0A%0A' + syiarketerangan + '%0A%0A' + syiarurl;
            quoteTele = '**' + syiarjudul + '**%0A%0A' + syiarsubbab + '%0A%0A' + syiarketerangan + '%0A%0A' + syiarurl;
            quoteCopy = syiarjudul + '\n\n' + syiarsubbab + '\n\n' + syiarketerangan + '\n\n' + syiarurl;
            switch (socmed) {
                case 'facebook':
                    if (quoteFBandTweet.length <= 400) {
                        quoteFBpost = '&quote=' + quoteFBandTweet;
                    } else {

                        quoteFBpost = '&quote=' + syiarjudul + '%0A' + syiarurl;
                    }

                    var x = 'https://www.facebook.com/sharer?u=' + syiarurl + quoteFBpost;
                    //maximum 400 karakter
                    window.open(x);
                    break;

                case 'twitter':
                    if (quoteFBandTweet.length <= 250) {
                        quoteTweetpost = quoteFBandTweet;
                    } else {
                        quoteTweetpost = syiarjudul + '%0A' + syiarurl;
                    }
                    var x = 'https://twitter.com/intent/tweet?text=' + quoteTweetpost + '%0A%0A' + syiarurl;
                    window.open(x);
                    break;

                case 'whatsapp':
                    var x = 'https://api.whatsapp.com/send?text=' + quoteWA;
                    window.open(x);
                    break;

                case 'telegram':
                    var x = 'https://t.me/share/url?url=' + quoteTele;
                    window.open(x);
                    break;
                case 'kopi':
                    var copyText = quoteCopy;
                    console.log(copyText)
                    navigator.clipboard.writeText(copyText).then(() => {
                            console.log("successfully copied");
                        })
                        .catch(() => {
                            console.log("something went wrong");
                        });
                    break;

            }

        }

        var script_url =
            "https://script.google.com/macros/s/AKfycbxmIuhVb5TtzND736q0eSYrZd7SCH2qsMljJyhlh_82DU7Kyls-1DBCsFhspz_aYVST1g/exec";
        var url = script_url + "?action=read1";

        $.getJSON(url, function (json) {

            var pilih_banksoal = [];
            var pilih_ujian = [];
            var pilih_tugas = [];
            for (var i = 0; i < json.records.length; i++) {
                var tipe = json.records[i].tipe;
                console.log("tipe :" + tipe)

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
                var urlyoutube = json.records[value_banksoal].urlyoutube;
                var cek = json.records[value_banksoal].cek;
                var judul = json.records[value_banksoal].judul;
                var deskripsi = json.records[value_banksoal].deskripsi;
                var detikke = json.records[value_banksoal].detikke;
                var tag1 = json.records[value_banksoal].tag1;
                var tag2 = json.records[value_banksoal].tag2;
                var tag3 = json.records[value_banksoal].tag3;
                var suhu = json.records[value_banksoal].suhu;

                var j = i + 1;

                switch (cek) {
                    case "youtubelandscape":
                        var link = urlyoutube.replace('https://youtu.be/', '').replace(
                            'https://www.youtube.com/watch?v=', '');
                        if (detikke == "") {
                            srcyoutube = `https://www.youtube.com/embed/` + link +
                                `?controls=0&rel=0&showinfo=0&&vq=medium`
                            linkyoutube = `https://www.youtube.com/watch?v=` + link + ``

                        } else {
                            srcyoutube = `https://www.youtube.com/embed/` + link +
                                `?controls=0&rel=0&showinfo=0&&vq=medium&t=` + detikke + `s`;
                            linkyoutube = `https://www.youtube.com/watch?v=` + link + `?&t=` + detikke + `s`;

                        }
                        var iframe =`
                        <div class='text-center'>
                            <div class="ratio ratio-16x9">
                                <iframe width="100%" height="100%"
                                    src="`+srcyoutube+`" frameborder="1"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                        `
                        break;
                    case "youtubepotrait":
                        var link = urlyoutube.replace('https://youtu.be/', '').replace(
                            'https://www.youtube.com/watch?v=', '');

                        if (detikke == "") {
                            srcyoutube = `https://www.youtube.com/embed/` + link;
                            linkyoutube = `https://www.youtube.com/watch?v=` + link;

                        } else {
                            srcyoutube = `https://www.youtube.com/embed/` + link;
                            linkyoutube = `https://www.youtube.com/watch?v=` + link;

                        }
                        var iframe =`
                        <div class='text-center'>
                            <div class="video">
                                <iframe width="270" height="480"
                                    src="`+srcyoutube+`" frameborder="1"
                                    allowfullscreen></iframe>
                            </div>
                        </div>
                        `
                        break;
                }


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


                var html_yt = `
                <div class="col-lg-6 col-md-12">
                <div class="card mt-2 mb-2 border-success" id="` + id + `">
                    `+iframe+`
                    <div class='card-header bg-white fw-bold h5 text-danger'><span id="iconsuhu_` + j + `">` + iconsuhu +
                    `</span> <span id="syiarke_` + j + `">` + j + `</span>. <span id="judul_` + j + `">` + judul + `</span> </div>
                    <div class="card-body">
                        
                        <h5 id="judul_` + j + `" class="card-title"></h5>
                        <p id="deskripsi_` + j + `" class="card-text">` + deskripsi + `</p>
                        <a id="linkyoutube_` + j + `" href="` + linkyoutube + `" class="btn btn-primary mb-2 text-capitalize" target="_blank">belajar di Youtube</a>
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
