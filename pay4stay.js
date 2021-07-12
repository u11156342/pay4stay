let bbidLocations = [
    {"bbid":30552,"lat":-24.342607,"lng":31.009523,"name":"Leopard's Lair Bush Lodge","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30552/property/67103.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30552/property/67103.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30552/property/67103.jpg"},
    {"bbid":29289,"lat":-33.238071,"lng":18.945051,"name":"Klipdrift Farm Stay","picture1":"https://wetu.com/ImageHandler/1600x1200/207831/image11.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/207831/image11.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/207831/image11.jpg"},
    {"bbid":23684,"lat":-25.278511,"lng":30.990847,"name":"NAD Living","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/23684/property/245834.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/23684/property/245834.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/23684/property/245834.jpg"},
    {"bbid":24141,"lat":-30.716335,"lng":26.708775,"name":"Aliwal Villa Guest Lodge","picture1":"https://wetu.com/ImageHandler/1600x1200/132886/aliwel8.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/132886/aliwel8.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/132886/aliwel8.jpg"},
    {"bbid":13232,"lat":-33.962326,"lng":25.607855,"name":"10onCAPE","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/13232/property/161568.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/13232/property/161568.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/13232/property/161568.jpg"},
    {"bbid":22996,"lat":-33.853539,"lng":18.495642,"name":"Grand Blue D","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22996/22996-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22996/22996-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22996/22996-1.jpg"},
    {"bbid":26486,"lat":0.0,"lng":0.0,"name":"KZN Park View Guest House","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/26486/26486-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/26486/26486-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/26486/26486-1.jpg"},
    {"bbid":21343,"lat":-33.917831,"lng":18.4237,"name":"Icon","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/21343/21343-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/21343/21343-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/21343/21343-1.jpg"},
    {"bbid":29773,"lat":-33.939877,"lng":23.315125,"name":"Blomberg Farm Villa","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/29773/property/32498.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/29773/property/32498.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/29773/property/32498.jpg"},
    {"bbid":28861,"lat":-34.028976,"lng":18.429907,"name":"Tallara Suite","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/28861/28861-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/28861/28861-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/28861/28861-1.jpg"},
    {"bbid":30102,"lat":0.0,"lng":0.0,"name":"Martha Test","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/30102/30102-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/30102/30102-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/30102/30102-1.jpg"},
    {"bbid":13662,"lat":-25.998281,"lng":27.553907,"name":"Kwa Manzi Guest Farm","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/13662/13662-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/13662/13662-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/13662/13662-1.jpg"},
    {"bbid":12970,"lat":-24.13308,"lng":27.9818,"name":"Limpopo Bushveld Retreat","picture1":"https://wetu.com/ImageHandler/1600x1200/24348/12970-gal1.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/24348/12970-gal1.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/24348/12970-gal1.jpg"},
    {"bbid":24511,"lat":-30.375807,"lng":30.678465,"name":"The Bronzy Sunbird","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/24511/24511-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/24511/24511-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/24511/24511-1.jpg"},
    {"bbid":21713,"lat":-25.513395,"lng":30.999411,"name":"Bingelela Beds Venue and Lifestyle conference","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/21713/21713-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/21713/21713-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/21713/21713-1.jpg"},
    {"bbid":20801,"lat":-3.378992,"lng":35.590202,"name":"Tanzania Ric Lodge LTD","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20801/20801-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20801/20801-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20801/20801-1.jpg"},
    {"bbid":16460,"lat":-26.120731,"lng":28.038563,"name":"One Toman Guest House","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16460/16460-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16460/16460-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16460/16460-1.jpg"},
    {"bbid":13398,"lat":0.0,"lng":0.0,"name":"Ezemvelo Nature Reserve","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/13398/13398-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/13398/13398-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/13398/13398-1.jpg"},
    {"bbid":19795,"lat":-24.533766,"lng":31.117628,"name":"HoyoHoyo Acorns Lodge","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/19795/property/90160.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/19795/property/90160.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/19795/property/90160.jpg"},
    {"bbid":18887,"lat":-24.707436,"lng":28.395042,"name":"Silver Rocks Caravan Park","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/18887/18887-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/18887/18887-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/18887/18887-1.jpg"},
    {"bbid":29323,"lat":-3.323097,"lng":35.710861,"name":"Pamoja Olea Farm Lodge","picture1":"https://wetu.com/ImageHandler/1600x1200/209821/capture.png","picture2":"https://wetu.com/ImageHandler/1600x1200/209821/capture.png","picture3":"https://wetu.com/ImageHandler/1600x1200/209821/capture.png"},
    {"bbid":31343,"lat":-26.990801,"lng":28.210831,"name":"Damview","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/31343/property/196294.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/31343/property/196294.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/31343/property/196294.jpg"},
    {"bbid":28498,"lat":-25.990652,"lng":28.104469,"name":"Cycad Place Midrand","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28498/property/153509.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28498/property/153509.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28498/property/153509.jpg"},
    {"bbid":25750,"lat":-33.383667,"lng":18.890104,"name":"3 Walter Street","picture1":"https://wetu.com/ImageHandler/1600x1200/146997/p10001164.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/146997/p10001164.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/146997/p10001164.jpg"},
    {"bbid":22095,"lat":-26.099939,"lng":28.05407,"name":"Sandton Hydro Executive Accommodations","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22095/22095-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22095/22095-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22095/22095-1.jpg"},
    {"bbid":12423,"lat":-33.915016,"lng":18.388588,"name":"Milton Lodge","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/12423/12423-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/12423/12423-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/12423/12423-1.jpg"},
    {"bbid":24842,"lat":-34.421974,"lng":19.235493,"name":"Kia Orana Beach House","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/24842/24842-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/24842/24842-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/24842/24842-1.jpg"},
    {"bbid":17621,"lat":-34.128117,"lng":22.115908,"name":"Suidersee Block 1","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/17621/property/32130.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/17621/property/32130.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/17621/property/32130.jpg"},
            {"bbid":20552,"lat":-32.787464,"lng":18.149733,"name":"Pelican House","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20552/20552-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20552/20552-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20552/20552-1.jpg"},
    {"bbid":27297,"lat":-33.952709,"lng":18.3846,"name":"Dolphin Crest Villa","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/27297/27297-2.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/27297/27297-2.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/27297/27297-2.jpg"},
    {"bbid":16933,"lat":-33.723389,"lng":19.150965,"name":"Du Kloof Lodge","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/16933/property/184533.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/16933/property/184533.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/16933/property/184533.jpg"},
    {"bbid":28162,"lat":6.439096,"lng":3.480843,"name":"Vertex Realty Apartment Lekki 1","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/28162/28162-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/28162/28162-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/28162/28162-1.jpg"},
    {"bbid":30801,"lat":-33.657932,"lng":21.769117,"name":"Karoowater Gasteplaas","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30801/property/141195.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30801/property/141195.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30801/property/141195.jpg"},
    {"bbid":12073,"lat":-34.423031,"lng":19.233879,"name":"Beluga House","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/12073/property/102072.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/12073/property/102072.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/12073/property/102072.jpg"},
    {"bbid":25300,"lat":-33.97739,"lng":18.507277,"name":"Camdene Guesthouse","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/25300/property/50797.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/25300/property/50797.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/25300/property/50797.jpg"},
    {"bbid":16899,"lat":-25.47761,"lng":30.93886,"name":"Nels River Guesthouse and Spa","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16899/16899-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16899/16899-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16899/16899-1.jpg"},
    {"bbid":20102,"lat":-34.409771,"lng":19.280804,"name":"Heaven in Hermanus","picture1":"https://wetu.com/ImageHandler/1600x1200/78399/image2.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/78399/image2.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/78399/image2.jpg"},
    {"bbid":17271,"lat":-29.862194,"lng":30.983564,"name":"An Upper Room B&B","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/17271/property/90819.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/17271/property/90819.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/17271/property/90819.jpg"},
    {"bbid":12589,"lat":-34.043846,"lng":18.359879,"name":"Beach Penthouse","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/12589/12589-3.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/12589/12589-3.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/12589/12589-3.jpg"},
    {"bbid":18184,"lat":-33.991444,"lng":22.587088,"name":"The Wilderness Beach Hotel","picture1":"https://wetu.com/ImageHandler/1600x1200/46800/wild11.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/46800/wild11.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/46800/wild11.jpg"},
    {"bbid":28532,"lat":-25.72859,"lng":27.862249,"name":"Majestic View Guesthouse and Spa","picture1":"https://wetu.com/ImageHandler/1600x1200/191577/harties6.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/191577/harties6.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/191577/harties6.jpg"},
    {"bbid":15759,"lat":-26.237694,"lng":28.16563,"name":"Lions Rest Guest House","picture1":"https://wetu.com/ImageHandler/1600x1200/39220/100234070.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/39220/100234070.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/39220/100234070.jpg"},
    {"bbid":17764,"lat":-0.41194,"lng":34.141575,"name":"Rusinga Island Lodge","picture1":"https://wetu.com/ImageHandler/1600x1200/42829/Lodge.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/42829/Lodge.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/42829/Lodge.jpg"},
    {"bbid":16876,"lat":-25.433607,"lng":31.962158,"name":"Meerkat Manor","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/16876/property/3277.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/16876/property/3277.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/16876/property/3277.jpg"},
    {"bbid":20417,"lat":-25.877432,"lng":28.156151,"name":"Condor House","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20417/20417-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20417/20417-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20417/20417-1.jpg"},
    {"bbid":28027,"lat":-34.129391,"lng":22.115154,"name":"Suidersee Block 2","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28027/property/203829.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28027/property/203829.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28027/property/203829.jpg"},
            {"bbid":18491,"lat":-24.863796,"lng":28.294451,"name":"Meloding Guest House","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/18491/18491-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/18491/18491-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/18491/18491-1.jpg"},
    {"bbid":31206,"lat":6.60004,"lng":3.353548,"name":"Six Diamond Hotel","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/31206/property/185894.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/31206/property/185894.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/31206/property/185894.jpg"},
    {"bbid":27628,"lat":-33.905289,"lng":19.114164,"name":"Franschhoek Village House","picture1":"https://wetu.com/ImageHandler/1600x1200/177107/back_patio.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/177107/back_patio.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/177107/back_patio.jpg"},
    {"bbid":25615,"lat":-32.99567,"lng":17.96916,"name":"Beach House","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/25615/25615-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/25615/25615-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/25615/25615-1.jpg"},
    {"bbid":24907,"lat":-29.101959,"lng":26.15085,"name":"ParkHill Luxury Accommodation","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/24907/property/205152.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/24907/property/205152.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/24907/property/205152.jpg"},
    {"bbid":12566,"lat":0.0,"lng":0.0,"name":"Marine Charters","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/12566/12566-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/12566/12566-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/12566/12566-1.jpg"},
    {"bbid":27782,"lat":-29.775335,"lng":30.698845,"name":"Peacevale Getaway","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/27782/27782-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/27782/27782-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/27782/27782-1.jpg"},
    {"bbid":20047,"lat":-22.96039,"lng":14.488841,"name":"Langholm Hotel","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/20047/property/248148.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/20047/property/248148.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/20047/property/248148.jpg"},
    {"bbid":17334,"lat":-25.965326,"lng":28.164688,"name":"Belvedere Estate","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/17334/17334-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/17334/17334-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/17334/17334-1.jpg"},
    {"bbid":26890,"lat":-25.453556,"lng":30.170418,"name":"Go Country Farm","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/26890/26890-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/26890/26890-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/26890/26890-1.jpg"},
    {"bbid":28477,"lat":-25.664047,"lng":28.116367,"name":"Francor Guesthouse","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28477/property/181596.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28477/property/181596.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28477/property/181596.jpg"},
    {"bbid":30944,"lat":-25.064493,"lng":31.082727,"name":"The Zarafa","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30944/property/157129.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30944/property/157129.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30944/property/157129.jpg"},
    {"bbid":12136,"lat":-25.685946,"lng":28.146069,"name":"Casta Diva","picture1":"https://wetu.com/ImageHandler/1600x1200/30348/img_7061.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/30348/img_7061.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/30348/img_7061.jpg"},
    {"bbid":22580,"lat":0.0,"lng":0.0,"name":"Debbie V5 Test","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22580/22580-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22580/22580-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22580/22580-1.jpg"},
    {"bbid":27278,"lat":-33.937756,"lng":18.852499,"name":"Charming & Luxurious Apartment","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/27278/27278-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/27278/27278-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/27278/27278-1.jpg"},
    {"bbid":25245,"lat":-33.288765,"lng":23.458174,"name":"Finchley Farm","picture1":"https://wetu.com/ImageHandler/1600x1200/140509/cottage_frontal_2.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/140509/cottage_frontal_2.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/140509/cottage_frontal_2.jpg"},
    {"bbid":16175,"lat":-34.042526,"lng":24.92325,"name":"Sea Whisper Self-Catering","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16175/16175-19.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16175/16175-19.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16175/16175-19.jpg"},
    {"bbid":14148,"lat":-34.060112,"lng":23.086353,"name":"Orange Lion Self Catering Apartment | Knysna","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/14148/14148-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/14148/14148-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/14148/14148-1.jpg"},
    {"bbid":21206,"lat":0.0,"lng":0.0,"name":"Hotelier Test","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/21206/21206-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/21206/21206-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/21206/21206-1.jpg"},
    {"bbid":29636,"lat":-33.086277,"lng":18.031254,"name":"19 Beach Road","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/29636/property/26332.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/29636/property/26332.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/29636/property/26332.jpg"},
    {"bbid":28924,"lat":-34.045849,"lng":18.35968,"name":"7 The Village Beach Apartment","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28924/property/26094.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28924/property/26094.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/28924/property/26094.jpg"},
    {"bbid":19280,"lat":-31.890333,"lng":26.881618,"name":"Cullinan Bed and Breakfast","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/19280/19280-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/19280/19280-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/19280/19280-1.jpg"},
    {"bbid":30417,"lat":-29.82485,"lng":31.00631,"name":"Singatha Guesthouse","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30417/property/65877.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30417/property/65877.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30417/property/65877.jpg"},
    {"bbid":24004,"lat":-23.89937,"lng":29.46575,"name":"Eskulaap Hotel","picture1":"https://wetu.com/ImageHandler/1600x1200/124942/20171011_165758.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/124942/20171011_165758.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/124942/20171011_165758.jpg"},
    {"bbid":26039,"lat":-28.535812,"lng":28.51967,"name":"SunnySide Guest Farm","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/26039/26039-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/26039/26039-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/26039/26039-1.jpg"},
    {"bbid":13377,"lat":-33.663643,"lng":19.799294,"name":"Langdam Guest Farm","picture1":"https://wetu.com/ImageHandler/1600x1200/30864/IMG_0763.JPG","picture2":"https://wetu.com/ImageHandler/1600x1200/30864/IMG_0763.JPG","picture3":"https://wetu.com/ImageHandler/1600x1200/30864/IMG_0763.JPG"},
    {"bbid":21656,"lat":-1.344933,"lng":36.702415,"name":"Karen Gables","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/21656/property/95415.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/21656/property/95415.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/21656/property/95415.jpg"},
    {"bbid":26193,"lat":-18.052553,"lng":14.469569,"name":"Uukwaluudhi Safari Lodge","picture1":"https://wetu.com/ImageHandler/1600x1200/155326/20180624_091909.jpg","picture2":"https://wetu.com/ImageHandler/1600x1200/155326/20180624_091909.jpg","picture3":"https://wetu.com/ImageHandler/1600x1200/155326/20180624_091909.jpg"},
    {"bbid":16525,"lat":-25.659691,"lng":27.243191,"name":"Gasthof","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16525/16525-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16525/16525-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/16525/16525-1.jpg"},
    {"bbid":22979,"lat":9.055979,"lng":7.455975,"name":"Presken Hotels @ Abuja - West Point Hotels","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22979/22979-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22979/22979-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/22979/22979-1.jpg"},
    {"bbid":20944,"lat":-29.551231,"lng":31.197792,"name":"The Lookout,","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20944/20944-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20944/20944-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/20944/20944-1.jpg"},
    {"bbid":14518,"lat":0.0,"lng":0.0,"name":"14518","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/14518/14518-4.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/14518/14518-4.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/14518/14518-4.jpg"},
    {"bbid":29266,"lat":-19.374693,"lng":15.984254,"name":"Etosha Oberland Lodge","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/29266/property/23065.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/29266/property/23065.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/29266/property/23065.jpg"},
    {"bbid":30047,"lat":-33.907993,"lng":19.11891,"name":"The Village Manor","picture1":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30047/property/45034.jpg","picture2":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30047/property/45034.jpg","picture3":"https://d1zyr4xmqw3mni.cloudfront.net/image/1600/gallery/30047/property/45034.jpg"},
    {"bbid":13727,"lat":-29.853559,"lng":31.001621,"name":"The Victoria Lodge Musgrave","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/13727/13727-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/13727/13727-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/13727/13727-1.jpg"},
    {"bbid":24454,"lat":6.444326,"lng":3.445245,"name":"Gemini Place Apartments Ikoyi","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/24454/24454-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/24454/24454-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/24454/24454-1.jpg"},
    {"bbid":10808,"lat":-34.037572,"lng":23.045716,"name":"Knysna Log-Inn","picture1":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/10808/10808-1.jpg","picture2":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/10808/10808-1.jpg","picture3":"https://production-nb-dfs.s3.amazonaws.com/u3/web/bridge/images/rt/10808/10808-1.jpg"}
];

let guestHouses = [];



let map;
var marker;
var propertyMarkers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: {lat: -33.952782, lng: 18.80064},
    });

    map.addListener("click", (e) => {
        $( "#lat").html(e.latLng.lat);
    $("#lng").html(e.latLng.lng);
    placeMarker(e.latLng, map);});
}

class GuestHouse {
    constructor(id, picture1, picture2, picture3, name, lat, lng, distanceBetween, routeLink) {
        this.url = "https://book.nightsbridge.com/" + id;
        this.picture1 = picture1;
        this.picture2 = picture2;
        this.picture3 = picture3;
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.distanceBetween = distanceBetween;
        this.routeLink = routeLink;
    }
}

function drawResults(guestHouses) {

    var resultDiv = "";
    for (var i = 0, l = guestHouses.length; i < l; i++) {

        resultDiv = resultDiv
            + "<br id='"+guestHouses[i].name+"'>"
            + "<label style='padding-top: 5px'>" + guestHouses[i].name + "</label>"
            + "<div class='resultRow'><a target=\"_blank\" rel=\"noopener noreferrer\" href='" + guestHouses[i].url + "'>Book here!</a>"
            + "<div><a target=\"_blank\" rel=\"noopener noreferrer\" href='" + guestHouses[i].routeLink + "'>Directions from your destination</a>"
            + "<br>"
            +"<div style='padding-top: 10px'>"
            + "<image width='200px' height='150px' src = '" + guestHouses[i].picture1 + "'>"
            + "<image style='padding-left: 10px' width='200px' height='150px' src = '" + guestHouses[i].picture2 + "'>"
            + "<image style='padding-left: 10px' width='200px' height='150px' src = '" + guestHouses[i].picture3 + "'>"
            + "</div>"
            +"</div>";
        addGuesthouseMarker(guestHouses[i],map);
    }
    $("#searchResults").html(resultDiv);
}

function addGuesthouseMarker(guestHouse, map) {
   var bbPosition = new google.maps.LatLng(guestHouse.lat, guestHouse.lng);
   var localMarker = new google.maps.Marker({
        position: bbPosition,
        label: guestHouse.name,
        map: map,
    });
    localMarker.addListener("click", () => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#"+guestHouse.name).offset().top
        }, 2000);
    });
    propertyMarkers.push(localMarker);
}

function removeMarkers(){
    for(i=0; i<propertyMarkers.length; i++){
        propertyMarkers[i].setMap(null);
    }
}

function getRouteLink(bbPosition, position) {
    var url = "https://www.google.com/maps/dir/?api=1";
    var origin = "&origin=" + position.lat() + "," + position.lng();
    var destination = "&destination=" + bbPosition.lat() + "," + bbPosition.lng();
    var newUrl = new URL(url + origin + destination);
    return newUrl;
}

function populateProperties(position) {
    var distance = $("#distance").val()*1000;
    var resultSize = $("#resultSize").val();
    guestHouses = [];
    $("#searchResults").html("");
    removeMarkers();
    for (var i = 0, l = bbidLocations.length; i < l; i++) {

        var bb = bbidLocations[i];
        var bbPosition = new google.maps.LatLng(bb.lat, bb.lng);
        var distanceBetween = google.maps.geometry.spherical.computeDistanceBetween(bbPosition, position);
        if (distanceBetween < distance) {
            let guestHouse = new GuestHouse(bb.bbid, bb.picture1, bb.picture2, bb.picture3, bb.name, bb.lat, bb.lng, distanceBetween, getRouteLink(bbPosition, position));
            guestHouses.push(guestHouse);
        }
        if (guestHouses.length >= resultSize){
            break;
        }

    }
    guestHouses.sort((a, b) => (a.distanceBetween > b.distanceBetween) ? 1 : -1);
    drawResults(guestHouses);
}

function placeMarker(position, map) {
    if (marker == null) {
        marker = new google.maps.Marker({
            position: position,
            map: map
        });
    } else {
        marker.setPosition(position);
    }
    map.panTo(position);
    populateProperties(position);
}

var fixmeTop = $('.fixme').offset().top;       // get initial position of the element

$(window).scroll(function() {                  // assign scroll event listener

    var currentScroll = $(window).scrollTop(); // get current position

    if (currentScroll >= fixmeTop) {           // apply position: fixed if you
        $('.fixme').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '0',

        });
    } else {                                   // apply position: static
        $('.fixme').css({                      // if you scroll above it
            position: 'fixed',
            top: '70px',
        });
    }

});



