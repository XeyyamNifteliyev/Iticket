import { useState, useEffect } from "react";
import "./Style.css";
import Menu from "../Menu/Index";
import Footer from "../Footer/Index";
import { Layout, Typography, Tabs, Collapse } from "antd";
const { Sider, Content } = Layout;
const { Panel } = Collapse;
const { Title } = Typography;
const { TabPane } = Tabs;

const contentStyle = {
  textAlign: "center",
  minHeight: "1000px",
  margin: "20px",
};
const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  backgroundColor: "#f5f5f5",
  margin: "50px 0",
};

const Index = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedTab, setSelectedTab] = useState("faq");
  const [contentTitle, setContentTitle] = useState("Ən çox verilən suallar");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTabChange = (key) => {
    setSelectedTab(key);
    switch (key) {
      case "faq":
        setContentTitle("Ən çox verilən suallar");
        break;
      case "support":
        setContentTitle("Dəstək");
        break;
      case "terms":
        setContentTitle("Şərtlər və Qaydalar");
        break;
      case "electronTicket":
        setContentTitle("Elektron bilet");
        break;
      case "ticketRefund":
        setContentTitle("Biletin qaytarılması və dəyişdirilməsi");
        break;
      case "privacy":
        setContentTitle("Məxfilik");
        break;
      case "about":
        setContentTitle("Haqqımızda");
        break;
      case "venues":
        setContentTitle("Məkanlar");
        break;
      case "salesPoints":
        setContentTitle("Biletlərin Satış Məntəqələri");
        break;
      case "karabakhFund":
        setContentTitle("Qarabağ Dirçəliş Fondu");
        break;
      case "contact":
        setContentTitle("Əlaqə");
        break;
      default:
        setContentTitle("");
        break;
    }
  };

  return (
    <div>
      <Menu />
      <Layout className="Haqqimizda">
        {windowWidth >= 1100 ? (
          <>
            <Content style={contentStyle}>
              {selectedTab === "faq" && (
                <div className="ContentDivs">
                  <Title level={2}>Ən çox verilən suallar</Title>
                  <p>
                    <Collapse accordion>
                      <Panel
                        header="1. Tədbirə giriş üçün Elektron Bileti çap etmək kifayətdirmi?"
                        key="1"
                      >
                        <p>
                          Bəli, elektron poçtunuza gələn e-bileti çap etməyiniz
                          və yaxud mobil telefonunuzda göstərmək kifayətdir.
                          Elektron biletlər çatdırılmır və ya fiziki biletlərlə
                          əvəz olunmur.
                        </p>
                      </Panel>
                      <Panel
                        header="2. Biletləri nağd ödənişlə haradan əldə etmək olar?"
                        key="2"
                      >
                        <p>
                          Biletləri şəhərin bütün kassalarından, “28 Mall”,
                          “Ganjlik Mall” ticarət mərkəzlərindən, həmçinin Heydər
                          Əliyev Sarayının kassasından, ASAN Xidmət
                          mərkəzlərindən və teatr kassalarından əldə edə
                          bilərsiniz. Satış məntəqələri haqqında ətraflı
                          məlumatla «Biletlərin satış məntəqələri» bölümündə
                          tanış ola bilərsiniz.
                        </p>
                      </Panel>
                      <Panel header="3. Çatdırılma xidməti:" key="3">
                        <p>
                          Çatdırılma xidməti, şənbə və bazar günləri istisna
                          olmaqla, tədbir satışa çıxdığı andan tədbirə 5 gün
                          qalanadək Bakı şəhəri daxilində 4-5 iş günü ərzində
                          həyata keçirilir.
                        </p>
                      </Panel>
                      <Panel
                        header="4. Neçə yaşından etibarən uşaqlara “Uşaq tədbirlərinə” bilet alınmalıdır?"
                        key="4"
                      >
                        <p>
                          Uşaq tədbirləri üçün biletlər 3 yaşdan etibarən əldə
                          olunmalıdır. Yaş məhdudiyyəti haqqında məlumatı
                          tədbirin səhifəsində tapa bilərsiniz.
                        </p>
                      </Panel>
                      <Panel
                        header="5. Böyüklər üçün nəzərdə tutulmuş tədbirlərə neçə yaşdan etibarən uşaqların girişinə icazə verilir?"
                        key="5"
                      >
                        <p>
                          Böyüklər üçün nəzərdə tutulmuş tədbirlərə 6 yaşdan
                          kiçik uşaqlar buraxılmır. 6 yaşdan yuxarı uşaqlar
                          yalnız böyüklərin müşayiəti ilə əlavə biletlə tədbirə
                          daxil ola bilərlər.
                        </p>
                      </Panel>
                      <Panel
                        header="6. Saytdan sifariş etdikdə “Promo code” bölməsini doldurmaq mütləqdir?"
                        key="6"
                      >
                        <p>
                          Xeyr, “Promo kod” bölməsi yalnız təşkilatçılar öz
                          tədbirinə müəyyən endirim təqdim etdikdə
                          doldurulur.“Promo kod” tamaşaçılara tədbirin
                          təşkilatçıları və ya iTicket.AZ tərəfindən təqdim
                          edilməlidir.
                        </p>
                      </Panel>
                      <Panel
                        header="7. Mən nə üçün qeydiyyatdan keçməliyəm?"
                        key="7"
                      >
                        <p>
                          Məlumatlarınızın qeydiyyatı bizə biletlər haqqında,
                          bilet mövcudluğu və hər hansı bir sifarişinizin
                          yeniləməsi haqqında məlumat verməyə imkan verir.
                        </p>
                      </Panel>
                      <Panel
                        header="8. Biletlərim itirildikdə, oğurlandıqda, zədələndikdə nə etməliyəm?"
                        key="8"
                      >
                        <p>
                          Tədbirdən asılı olaraq fiziki Biletlər itirildikdə və
                          ya oğurlandıqda biletin dəyərinin 15% - ni tutmaqla
                          bərpa edilə bilər. E- biletləri onlayn hesabınızdan
                          yenidən yükləyə bilərsiniz. Xahiş edirik, unutmayın
                          ki, suyun, palçığın, istiliyin və ya günəş işığının
                          təsiri biletinizə zərər verə bilər. Əgər biletin hər
                          hansı bir hissəsi zədələnibsə, sizə tədbirin keçirilmə
                          məkanına daxil olmağa imtina edilə bilər.
                        </p>
                      </Panel>
                      <Panel
                        header="9. Biletləri geri qaytarmaq məcburiyyəti olduqda nə etməliyəm?"
                        key="9"
                      >
                        <p>
                          Biletlərinizi diqqətlə seçin. Ödəniş biletlərin
                          sifarişi təsdiqləndikdən dərhal sonra həyata
                          keçiriləcək. Tədbirin baş tutmasına 48 saat və ya daha
                          çox müddət qaldıqda bilet geri qaytarılarsa və ya
                          dəyişdirilərsə, biletin dəyərinin 30%-i tutulur.
                          Tədbirin baş tutmasına 48 saat və ya daha az müddət
                          qaldıqda bilet geri qaytarılmır və ya dəyişdirilmir.
                          Biletlərin yenidən satışı qadağandır və biletlərin
                          ləğvi ilə nəticələnə bilər.
                        </p>
                      </Panel>
                      <Panel
                        header="10. Tədbir təxirə salınarsa, məkanı dəyişərsə və ya ləğv olunarsa, biletlərimi dəyişə, qaytara bilərəmmi?"
                        key="10"
                      >
                        <p>
                          Tədbir təxirə salınarsa və ya məkanı dəyişərsə,
                          biletlərinizin yeni zamana və ya yeni məkana etibarlı
                          olması haqqında məlumatı çağrı mərkəzimizdən əldə edə
                          bilərsiniz. Yeni tarix və ya məkan sizi qane etmədiyi
                          təqdirdə tədbirin təxirə salınması haqda məlumatın
                          verilməsindən etibarən, 14 gün ərzində biletlərinizi
                          qaytarıb ödənişinizi tutulma olmadan geri ala
                          bilərsiniz. 14 gündən çox müddət keçdikdə Biletin
                          qaytarılması və dəyişdirilməsi qaydalarına əsasən,
                          bilet dəyərinin 30%-i tutulur. Tədbirin yeni tarixdə
                          baş tutmasına 48 saat və ya daha az müddət qaldıqda
                          bilet geri qaytarılmır və ya dəyişdirilmir. Tədbir
                          ləğv olunarsa, sorğunuz əsasında, ödənişiniz tutulma
                          olmadan geri qaytarılacaq.
                        </p>
                      </Panel>
                      <Panel
                        header="11. Mən Azərbaycandan kənarda yaşayıram. Bilet ala bilərəm?"
                        key="11"
                      >
                        <p>
                          Bəli, ala bilərsiniz. Biletləri istənilən yer və zaman
                          iTicket.AZ veb səhifəmiz və ya mobil əlavəmiz
                          vasitəsilə onlayn əldə edə bilərsiniz.
                        </p>
                      </Panel>
                      <Panel
                        header="12. Məkana daxil olmaq üçün nə etməliyəm?"
                        key="12"
                      >
                        <p>
                          Məkana daxil olmaq üçün tamaşaçıların etibarlı bileti
                          olmalıdır. Yaşı 16-dan az olan bilet sahibləri yalnız
                          əlavə bilet və etibarlı şəxsiyyət vəsiqəsi olan
                          böyüklərin (18+) müşayiəti ilə tədbirdə iştirak edə
                          bilərlər.
                        </p>
                      </Panel>
                    </Collapse>
                  </p>
                </div>
              )}
              {selectedTab === "support" && (
                <div className="ContentDivs">
                  <Title level={2}>Dəstək</Title>
                  <p>
                    «Ən çox verilən suallar» bölməsində suallarınıza cavab tapa
                    bilmədiyiniz halda <a href="#">+994 12 424 24 24</a> nömrəsi
                    ilə əlaqə saxlayaraq «Müştəri xidmətləri» komandamızla əlaqə
                    saxlayın. Bütün qeyd və təkliflərinizi elektron poçt
                    ünvanımıza yaza bilərsiniz: info@iticket.az. MÜŞTƏRİ
                    XİDMƏTLƏRİMİZ HƏR GÜN 24 SAAT XİDMƏTİNİZDƏDİR.
                  </p>
                </div>
              )}
              {selectedTab === "terms" && (
                <div className="ContentDivs">
                  <Title level={2}>Şərtlər və Qaydalar</Title>
                  <p>
                    Ümumi qaydalar və şərtlər iTicket.az veb-səhifəsindən
                    istifadə etməklə siz aşağıdakı “Şərtlərə” və Azərbaycan
                    Respublikasının qanunvericiliyi əsasında tənzimlənən bütün
                    mövcud qanun və qaydalara riayət edəcəyinizi açıq şəkildə
                    bildirirsiniz. Ticarət nişanları iTicket.az veb-səhifəsində
                    olan loqotiplər iTicket.az veb-səhifəsinə məxsus
                    qeydiyyatdan keçmiş əmtəə nişanlarıdır və heç bir halda
                    iTicket.az şirkətinin qabaqcadan yazılı icazəsi olmadan
                    istifadə edilə bilməz. Müəlliflik hüququ Bu veb-səhifənin
                    məzmunu və proqram təminatı iTicket.az şirkətinin mülkiyyəti
                    hesab olunur və müəlliflik hüquqları ilə qorunur. Bu qayda
                    və şərtlərin məhdud lisenziya təminatında açıq şəkildə ifadə
                    olunanlar istisna olmaqla, yerdə qalan heç bir halda
                    iTicket.az öz ticarət nişanları, müəlliflik hüquqları və ya
                    digər özəl məlumatları ilə bağlı hər hansı zidd ifadə və ya
                    nəzərdə tutulan hüquqa yol vermir.
                  </p>
                </div>
              )}
              {selectedTab === "electronTicket" && (
                <div className="ContentDivs">
                  <Title level={2}>Elektron bilet</Title>
                  <p>
                    Bu bölümde elektron bilet hakkında bilgiler bulunmaktadır.
                  </p>
                </div>
              )}
              {selectedTab === "ticketRefund" && (
                <div className="ContentDivs">
                  <Title level={2}>
                    Biletin qaytarılması və dəyişdirilməsi
                  </Title>
                  <p>
                    Bu bölümde bilet iade ve değişiklik prosedürlerine ilişkin
                    bilgiler bulunmaktadır.
                  </p>
                </div>
              )}
              {selectedTab === "privacy" && (
                <div className="ContentDivs">
                  <Title level={2}>Məxfilik</Title>
                  <p>
                    Bu bölümde gizlilik politikası ve kişisel verilerin
                    işlenmesi hakkında bilgiler bulunmaktadır.
                  </p>
                </div>
              )}
              {selectedTab === "about" && (
                <div className="ContentDivs">
                  <Title level={2}>Haqqımızda</Title>
                  <p>
                    iTicket.az - 2016-cı ildən etibarən öz fəaliyyətinə
                    başlamışdır. iTicket.az həm onlayn həm də offlayn olaraq
                    konsertlərə, teatrlara, idman və əyləncə tədbirlərinə bilet
                    satışını reallaşdırır. Bakı şəhərində 20-yə yaxın satış
                    nöqtəsi iTicket.az idarəçiliyi altında fəaliyyət göstərir.
                    iTicket.az IV İslam Həmrəyliyi Oyunları, 2017, 2018 və 2019
                    Formula 1 Azərbaycan Qran-Pri yarışları, 2017 Voleybol üzrə
                    qadınlararası Avropa Çempionatı, UEFA Çempionlar Liqasının
                    qrup mərhələsi, Bakıda velosiped idmanının “BMX Racing” növü
                    üzrə 2018-ci il dünya çempionatı, АРА18 və 19 musiqi
                    festivalı və AFFA kimi tədbirlərin rəsmi əməkdaşı və bilet
                    satışı üzrə təchizatçısıdır. iTicket.az bilet alışı
                    prosessinin daha səmərəli və rahat etmək üçün öz məhsul və
                    xidmətlərini təkmilləşdirmək üçün çalışır. Şirkətin adı
                    «İTİCKET» MMC VÖEN 1701956271 Dövlət Reyestr Çıxarışın
                    nömrəsi 1601020018130100 Ünvan Azərbaycan, Bakı, Səməd
                    Vurğun 34, AF Mall 14-cü mərtəbə, ofis 36 AZ1014
                  </p>
                </div>
              )}
              {selectedTab === "venues" && (
                <div className="ContentDivs">
                  <Title level={2}>Məkanlar</Title>
                  <p>
                    Bu bölümde etkinlik mekanlarına ilişkin bilgiler
                    bulunmaktadır.
                  </p>
                </div>
              )}
              {selectedTab === "salesPoints" && (
                <div className="ContentDivs">
                  <Title level={2}>Biletlərin Satış Məntəqələri</Title>
                  <p>
                    Bu bölümde bilet satış noktalarına ilişkin bilgiler
                    bulunmaktadır.
                  </p>
                </div>
              )}
              {selectedTab === "karabakhFund" && (
                <div className="ContentDivs">
                  <Title level={2}>Qarabağ Dirçəliş Fondu</Title>
                  <p>
                    “iTicket.az” və Qarabağ Dirçəliş Fondu arasında əməkdaşlıq
                    haqqında razılaşma əldə olunub. Razılaşmanın əsas məqsəd və
                    vəzifəsi birgə layihə və tədbirlərin həyata keçirilməsi ilə
                    erməni işğalından azad edilmiş ərazilərin inkişaf edən
                    regiona çevrilməsi prosesinə yardım etməkdir. 6 illik
                    fəaliyyəti müddətində “iTicket.az” biznesin korporativ
                    sosial məsuliyyətinin əsas prinsiplərinə müvəffəqiyyətlə
                    əməl edərək, şirkətin əsas fəaliyyəti ilə bilavasitə bağlı
                    olan sosial, iqtisadi və ekoloji sahədə Azərbaycan
                    cəmiyyətinin inkişafına könüllü töhfə verir. “iTicket.az”
                    ilə Qarabağ Dirçəliş Fondu arasında əməkdaşlıq 2022-ci ilin
                    yayında Mədəniyyət Nazirliyinin təşkilati dəstəyilə, eləcə
                    də fondun təşəbbüsü və təşkilatçılığı ilə Azərbaycan Dövlət
                    Akademik Filarmoniyasında keçirilmiş “Qarabağ gecəsi”
                    xeyriyyə konsertindən başlayıb. Layihə çərçivəsində
                    iTicket.az tədbirə biletlərin satışını həyata keçirib.
                    Konsertdən toplanmış vəsaitlər işğaldan azad edilmiş
                    ərazilərin bərpası və yenidən qurulması, eləcə də dayanıqlı
                    iqtisadiyyata və yüksək rifaha malik regiona çevrilməsi,
                    həmçinin həmin ərazilərdəki ekoloji tarazlığın bərpa
                    olunması istiqamətində həyata keçirilən tədbirlərə
                    yönəldilib. Uğurlu başlanğıcdan sonra iTicket.az ilə Qarabağ
                    Dirçəliş Fondu arasında əməkdaşlıq davam edərək birgə layihə
                    ilə nəticələndi. Bu layihə çərçivəsində hər kəs işğaldan
                    azad edilmiş ərazilərin bərpasına öz töhfəsini verə bilər.
                  </p>
                </div>
              )}
              {selectedTab === "contact" && (
                <div className="ContentDivs">
                  <Title level={2}>Əlaqə</Title>
                  <p>
                    <h4>Baş Ofis</h4> AF Mall 14-cü mərtəbə, ofis 36. Səməd
                    Vurğun 34
                    <h4>AZ1014, Bakı</h4> Azərbaycan Telefon +994 12 424-24-24
                    <h4>Bütün təklif və iradlarınız üçün:</h4> info@iticket.az
                  </p>
                </div>
              )}
            </Content>

            <Sider width="25%" style={siderStyle}>
              <Tabs
                defaultActiveKey="faq"
                tabPosition="right"
                onChange={handleTabChange}
                className="Tabs"
              >
                <TabPane tab="Ən çox verilən suallar" key="faq" name="faq"  />
                <TabPane tab="Dəstək" key="support" name="support" />
                <TabPane tab="Şərtlər və Qaydalar" key="terms" name="terms" />
                <TabPane
                  tab="Elektron bilet"
                  key="electronTicket"
                  name="electronTicket"
                />
                <TabPane
                  tab="Biletin qaytarılması və dəyişdirilməsi"
                  key="ticketRefund"
                  name="ticketRefund"
                />
                <TabPane tab="Məxfilik" key="privacy" name="privacy" />
                <TabPane tab="Haqqımızda" key="about" name="about" />
                <TabPane tab="Məkanlar" key="venues" name="venues" />
                <TabPane
                  tab="Biletlərin Satış Məntəqələri"
                  key="salesPoints"
                  name="salesPoints"
                />
                <TabPane
                  tab="Qarabağ Dirçəliş Fondu"
                  key="karabakhFund"  
                  name="karabakhFund"
                />
                <TabPane tab="Əlaqə" key="contact" name="contact" />
              </Tabs>
            </Sider>
          </>
        ) : (
          <>
            <Content style={contentStyle}>
              {selectedTab === "faq" && (
                <div className="ContentDivs">
                  <Title level={2}>Ən çox verilən suallar</Title>
                  <p>
                    <Collapse accordion>
                      <Panel
                        header="1. Tədbirə giriş üçün Elektron Bileti çap etmək kifayətdirmi?"
                        key="1"
                      >
                        <p>
                          Bəli, elektron poçtunuza gələn e-bileti çap etməyiniz
                          və yaxud mobil telefonunuzda göstərmək kifayətdir.
                          Elektron biletlər çatdırılmır və ya fiziki biletlərlə
                          əvəz olunmur.
                        </p>
                      </Panel>
                      <Panel
                        header="2. Biletləri nağd ödənişlə haradan əldə etmək olar?"
                        key="2"
                      >
                        <p>
                          Biletləri şəhərin bütün kassalarından, “28 Mall”,
                          “Ganjlik Mall” ticarət mərkəzlərindən, həmçinin Heydər
                          Əliyev Sarayının kassasından, ASAN Xidmət
                          mərkəzlərindən və teatr kassalarından əldə edə
                          bilərsiniz. Satış məntəqələri haqqında ətraflı
                          məlumatla «Biletlərin satış məntəqələri» bölümündə
                          tanış ola bilərsiniz.
                        </p>
                      </Panel>
                      <Panel header="3. Çatdırılma xidməti:" key="3">
                        <p>
                          Çatdırılma xidməti, şənbə və bazar günləri istisna
                          olmaqla, tədbir satışa çıxdığı andan tədbirə 5 gün
                          qalanadək Bakı şəhəri daxilində 4-5 iş günü ərzində
                          həyata keçirilir.
                        </p>
                      </Panel>
                      <Panel
                        header="4. Neçə yaşından etibarən uşaqlara “Uşaq tədbirlərinə” bilet alınmalıdır?"
                        key="4"
                      >
                        <p>
                          Uşaq tədbirləri üçün biletlər 3 yaşdan etibarən əldə
                          olunmalıdır. Yaş məhdudiyyəti haqqında məlumatı
                          tədbirin səhifəsində tapa bilərsiniz.
                        </p>
                      </Panel>
                      <Panel
                        header="5. Böyüklər üçün nəzərdə tutulmuş tədbirlərə neçə yaşdan etibarən uşaqların girişinə icazə verilir?"
                        key="5"
                      >
                        <p>
                          Böyüklər üçün nəzərdə tutulmuş tədbirlərə 6 yaşdan
                          kiçik uşaqlar buraxılmır. 6 yaşdan yuxarı uşaqlar
                          yalnız böyüklərin müşayiəti ilə əlavə biletlə tədbirə
                          daxil ola bilərlər.
                        </p>
                      </Panel>
                      <Panel
                        header="6. Saytdan sifariş etdikdə “Promo code” bölməsini doldurmaq mütləqdir?"
                        key="6"
                      >
                        <p>
                          Xeyr, “Promo kod” bölməsi yalnız təşkilatçılar öz
                          tədbirinə müəyyən endirim təqdim etdikdə
                          doldurulur.“Promo kod” tamaşaçılara tədbirin
                          təşkilatçıları və ya iTicket.AZ tərəfindən təqdim
                          edilməlidir.
                        </p>
                      </Panel>
                      <Panel
                        header="7. Mən nə üçün qeydiyyatdan keçməliyəm?"
                        key="7"
                      >
                        <p>
                          Məlumatlarınızın qeydiyyatı bizə biletlər haqqında,
                          bilet mövcudluğu və hər hansı bir sifarişinizin
                          yeniləməsi haqqında məlumat verməyə imkan verir.
                        </p>
                      </Panel>
                      <Panel
                        header="8. Biletlərim itirildikdə, oğurlandıqda, zədələndikdə nə etməliyəm?"
                        key="8"
                      >
                        <p>
                          Tədbirdən asılı olaraq fiziki Biletlər itirildikdə və
                          ya oğurlandıqda biletin dəyərinin 15% - ni tutmaqla
                          bərpa edilə bilər. E- biletləri onlayn hesabınızdan
                          yenidən yükləyə bilərsiniz. Xahiş edirik, unutmayın
                          ki, suyun, palçığın, istiliyin və ya günəş işığının
                          təsiri biletinizə zərər verə bilər. Əgər biletin hər
                          hansı bir hissəsi zədələnibsə, sizə tədbirin keçirilmə
                          məkanına daxil olmağa imtina edilə bilər.
                        </p>
                      </Panel>
                      <Panel
                        header="9. Biletləri geri qaytarmaq məcburiyyəti olduqda nə etməliyəm?"
                        key="9"
                      >
                        <p>
                          Biletlərinizi diqqətlə seçin. Ödəniş biletlərin
                          sifarişi təsdiqləndikdən dərhal sonra həyata
                          keçiriləcək. Tədbirin baş tutmasına 48 saat və ya daha
                          çox müddət qaldıqda bilet geri qaytarılarsa və ya
                          dəyişdirilərsə, biletin dəyərinin 30%-i tutulur.
                          Tədbirin baş tutmasına 48 saat və ya daha az müddət
                          qaldıqda bilet geri qaytarılmır və ya dəyişdirilmir.
                          Biletlərin yenidən satışı qadağandır və biletlərin
                          ləğvi ilə nəticələnə bilər.
                        </p>
                      </Panel>
                      <Panel
                        header="10. Tədbir təxirə salınarsa, məkanı dəyişərsə və ya ləğv olunarsa, biletlərimi dəyişə, qaytara bilərəmmi?"
                        key="10"
                      >
                        <p>
                          Tədbir təxirə salınarsa və ya məkanı dəyişərsə,
                          biletlərinizin yeni zamana və ya yeni məkana etibarlı
                          olması haqqında məlumatı çağrı mərkəzimizdən əldə edə
                          bilərsiniz. Yeni tarix və ya məkan sizi qane etmədiyi
                          təqdirdə tədbirin təxirə salınması haqda məlumatın
                          verilməsindən etibarən, 14 gün ərzində biletlərinizi
                          qaytarıb ödənişinizi tutulma olmadan geri ala
                          bilərsiniz. 14 gündən çox müddət keçdikdə Biletin
                          qaytarılması və dəyişdirilməsi qaydalarına əsasən,
                          bilet dəyərinin 30%-i tutulur. Tədbirin yeni tarixdə
                          baş tutmasına 48 saat və ya daha az müddət qaldıqda
                          bilet geri qaytarılmır və ya dəyişdirilmir. Tədbir
                          ləğv olunarsa, sorğunuz əsasında, ödənişiniz tutulma
                          olmadan geri qaytarılacaq.
                        </p>
                      </Panel>
                      <Panel
                        header="11. Mən Azərbaycandan kənarda yaşayıram. Bilet ala bilərəm?"
                        key="11"
                      >
                        <p>
                          Bəli, ala bilərsiniz. Biletləri istənilən yer və zaman
                          iTicket.AZ veb səhifəmiz və ya mobil əlavəmiz
                          vasitəsilə onlayn əldə edə bilərsiniz.
                        </p>
                      </Panel>
                      <Panel
                        header="12. Məkana daxil olmaq üçün nə etməliyəm?"
                        key="12"
                      >
                        <p>
                          Məkana daxil olmaq üçün tamaşaçıların etibarlı bileti
                          olmalıdır. Yaşı 16-dan az olan bilet sahibləri yalnız
                          əlavə bilet və etibarlı şəxsiyyət vəsiqəsi olan
                          böyüklərin (18+) müşayiəti ilə tədbirdə iştirak edə
                          bilərlər.
                        </p>
                      </Panel>
                    </Collapse>
                  </p>
                </div>
              )}
              {selectedTab === "support" && (
                <div className="ContentDivs">
                  <Title level={2}>Dəstək</Title>
                  <p>
                    «Ən çox verilən suallar» bölməsində suallarınıza cavab tapa
                    bilmədiyiniz halda <a href="#">+994 12 424 24 24</a> nömrəsi
                    ilə əlaqə saxlayaraq «Müştəri xidmətləri» komandamızla əlaqə
                    saxlayın. Bütün qeyd və təkliflərinizi elektron poçt
                    ünvanımıza yaza bilərsiniz: info@iticket.az. MÜŞTƏRİ
                    XİDMƏTLƏRİMİZ HƏR GÜN 24 SAAT XİDMƏTİNİZDƏDİR.
                  </p>
                </div>
              )}
              {selectedTab === "terms" && (
                <div className="ContentDivs">
                  <Title level={2}>Şərtlər və Qaydalar</Title>
                  <p>
                    Ümumi qaydalar və şərtlər iTicket.az veb-səhifəsindən
                    istifadə etməklə siz aşağıdakı “Şərtlərə” və Azərbaycan
                    Respublikasının qanunvericiliyi əsasında tənzimlənən bütün
                    mövcud qanun və qaydalara riayət edəcəyinizi açıq şəkildə
                    bildirirsiniz. Ticarət nişanları iTicket.az veb-səhifəsində
                    olan loqotiplər iTicket.az veb-səhifəsinə məxsus
                    qeydiyyatdan keçmiş əmtəə nişanlarıdır və heç bir halda
                    iTicket.az şirkətinin qabaqcadan yazılı icazəsi olmadan
                    istifadə edilə bilməz. Müəlliflik hüququ Bu veb-səhifənin
                    məzmunu və proqram təminatı iTicket.az şirkətinin mülkiyyəti
                    hesab olunur və müəlliflik hüquqları ilə qorunur. Bu qayda
                    və şərtlərin məhdud lisenziya təminatında açıq şəkildə ifadə
                    olunanlar istisna olmaqla, yerdə qalan heç bir halda
                    iTicket.az öz ticarət nişanları, müəlliflik hüquqları və ya
                    digər özəl məlumatları ilə bağlı hər hansı zidd ifadə və ya
                    nəzərdə tutulan hüquqa yol vermir.
                  </p>
                </div>
              )}
              {selectedTab === "electronTicket" && (
                <div className="ContentDivs">
                  <Title level={2}>Elektron bilet</Title>
                  <p>
                    Bu bölümde elektron bilet hakkında bilgiler bulunmaktadır.
                  </p>
                </div>
              )}
              {selectedTab === "ticketRefund" && (
                <div className="ContentDivs">
                  <Title level={2}>
                    Biletin qaytarılması və dəyişdirilməsi
                  </Title>
                  <p>
                    Bu bölümde bilet iade ve değişiklik prosedürlerine ilişkin
                    bilgiler bulunmaktadır.
                  </p>
                </div>
              )}
              {selectedTab === "privacy" && (
                <div className="ContentDivs">
                  <Title level={2}>Məxfilik</Title>
                  <p>
                    Bu bölümde gizlilik politikası ve kişisel verilerin
                    işlenmesi hakkında bilgiler bulunmaktadır.
                  </p>
                </div>
              )}
              {selectedTab === "about" && (
                <div className="ContentDivs">
                  <Title level={2}>Haqqımızda</Title>
                  <p>
                    iTicket.az - 2016-cı ildən etibarən öz fəaliyyətinə
                    başlamışdır. iTicket.az həm onlayn həm də offlayn olaraq
                    konsertlərə, teatrlara, idman və əyləncə tədbirlərinə bilet
                    satışını reallaşdırır. Bakı şəhərində 20-yə yaxın satış
                    nöqtəsi iTicket.az idarəçiliyi altında fəaliyyət göstərir.
                    iTicket.az IV İslam Həmrəyliyi Oyunları, 2017, 2018 və 2019
                    Formula 1 Azərbaycan Qran-Pri yarışları, 2017 Voleybol üzrə
                    qadınlararası Avropa Çempionatı, UEFA Çempionlar Liqasının
                    qrup mərhələsi, Bakıda velosiped idmanının “BMX Racing” növü
                    üzrə 2018-ci il dünya çempionatı, ЖАРА18 və 19 musiqi
                    festivalı və AFFA kimi tədbirlərin rəsmi əməkdaşı və bilet
                    satışı üzrə təchizatçısıdır. iTicket.az bilet alışı
                    prosessinin daha səmərəli və rahat etmək üçün öz məhsul və
                    xidmətlərini təkmilləşdirmək üçün çalışır. Şirkətin adı
                    «İTİCKET» MMC VÖEN 1701956271 Dövlət Reyestr Çıxarışın
                    nömrəsi 1601020018130100 Ünvan Azərbaycan, Bakı, Səməd
                    Vurğun 34, AF Mall 14-cü mərtəbə, ofis 36 AZ1014
                  </p>
                </div>
              )}
              {selectedTab === "venues" && (
                <div className="ContentDivs">
                  <Title level={2}>Məkanlar</Title>
                  <p>
                    Bu bölümde etkinlik mekanlarına ilişkin bilgiler
                    bulunmaktadır.
                  </p>
                </div>
              )}
              {selectedTab === "salesPoints" && (
                <div className="ContentDivs">
                  <Title level={2}>Biletlərin Satış Məntəqələri</Title>
                  <p>
                    Bu bölümde bilet satış noktalarına ilişkin bilgiler
                    bulunmaktadır.
                  </p>
                </div>
              )}
              {selectedTab === "karabakhFund" && (
                <div className="ContentDivs">
                  <Title level={2}>Qarabağ Dirçəliş Fondu</Title>
                  <p>
                    “iTicket.az” və Qarabağ Dirçəliş Fondu arasında əməkdaşlıq
                    haqqında razılaşma əldə olunub. Razılaşmanın əsas məqsəd və
                    vəzifəsi birgə layihə və tədbirlərin həyata keçirilməsi ilə
                    erməni işğalından azad edilmiş ərazilərin inkişaf edən
                    regiona çevrilməsi prosesinə yardım etməkdir. 6 illik
                    fəaliyyəti müddətində “iTicket.az” biznesin korporativ
                    sosial məsuliyyətinin əsas prinsiplərinə müvəffəqiyyətlə
                    əməl edərək, şirkətin əsas fəaliyyəti ilə bilavasitə bağlı
                    olan sosial, iqtisadi və ekoloji sahədə Azərbaycan
                    cəmiyyətinin inkişafına könüllü töhfə verir. “iTicket.az”
                    ilə Qarabağ Dirçəliş Fondu arasında əməkdaşlıq 2022-ci ilin
                    yayında Mədəniyyət Nazirliyinin təşkilati dəstəyilə, eləcə
                    də fondun təşəbbüsü və təşkilatçılığı ilə Azərbaycan Dövlət
                    Akademik Filarmoniyasında keçirilmiş “Qarabağ gecəsi”
                    xeyriyyə konsertindən başlayıb. Layihə çərçivəsində
                    iTicket.az tədbirə biletlərin satışını həyata keçirib.
                    Konsertdən toplanmış vəsaitlər işğaldan azad edilmiş
                    ərazilərin bərpası və yenidən qurulması, eləcə də dayanıqlı
                    iqtisadiyyata və yüksək rifaha malik regiona çevrilməsi,
                    həmçinin həmin ərazilərdəki ekoloji tarazlığın bərpa
                    olunması istiqamətində həyata keçirilən tədbirlərə
                    yönəldilib. Uğurlu başlanğıcdan sonra iTicket.az ilə Qarabağ
                    Dirçəliş Fondu arasında əməkdaşlıq davam edərək birgə layihə
                    ilə nəticələndi. Bu layihə çərçivəsində hər kəs işğaldan
                    azad edilmiş ərazilərin bərpasına öz töhfəsini verə bilər.
                  </p>
                </div>
              )}
              {selectedTab === "contact" && (
                <div className="ContentDivs">
                  <Title level={2}>Əlaqə</Title>
                  <p>
                    <h4>Baş Ofis</h4> AF Mall 14-cü mərtəbə, ofis 36. Səməd
                    Vurğun 34
                    <h4>AZ1014, Bakı</h4> Azərbaycan Telefon +994 12 424-24-24
                    <h4>Bütün təklif və iradlarınız üçün:</h4> info@iticket.az
                  </p>
                </div>
              )}
            </Content>
          </>
        )}
      </Layout>
      <Footer />
    </div>
  );
};

export default Index;
