(() => {
  "use strict";

  const pairs = [
    ["Anatomy Atelier", "آتلیهٔ آناتومی"],
    ["Learn anatomy like an artist", "آناتومی رو مثل یک هنرمند یاد بگیر"],
    ["Primary navigation", "پیمایش اصلی"], ["The", ""],
    ["thumbnail", "تصویر بندانگشتی"], ["anatomical illustration", "تصویر آناتومی"],
    ["microscopic tissue view", "نمای میکروسکوپی بافت"], ["anatomical comparison", "مقایسهٔ آناتومی"],
    ["Explore", "کاوش"], ["Systems", "دستگاه‌ها"], ["Lessons", "درس‌ها"],
    ["Library", "کتابخانه"], ["Notes", "یادداشت‌ها"],
    ["Search organs, topics…", "جست‌وجوی اندام‌ها و موضوع‌ها…"],
    ["Open learner profile", "باز کردن پروفایل هنرجو"], ["Open organ library", "باز کردن کتابخانهٔ اندام‌ها"],
    ["Organ library", "کتابخانهٔ اندام‌ها"], ["Close library", "بستن کتابخانه"],
    ["Saved organs", "اندام‌های ذخیره‌شده"], ["View all organs", "دیدن همهٔ اندام‌ها"],
    ["3D viewer tools", "ابزارهای نمایش سه‌بعدی"], ["Viewer instructions", "راهنمای نمایشگر"],
    ["Interactive 3D anatomy model. Drag to rotate, scroll to zoom, and click a dot to read about that structure.", "مدل سه‌بعدی تعاملی آناتومی؛ برای چرخاندن بکش، برای بزرگ‌نمایی اسکرول کن و برای شناخت هر بخش روی نقطه‌ها بزن."],
    ["Rotate", "چرخاندن"], ["Zoom", "بزرگ‌نمایی"], ["Isolate", "جداسازی"],
    ["Cross-section", "برش عرضی"], ["Layers", "لایه‌ها"], ["Compare", "مقایسه"], ["Reset", "بازنشانی"],
    ["Tip", "راهنما"], ["Drag to rotate", "برای چرخاندن بکش"], ["Scroll to zoom", "برای بزرگ‌نمایی اسکرول کن"],
    ["Click a dot to learn more", "برای اطلاعات بیشتر روی یک نقطه بزن"],
    ["Auto rotate", "چرخش خودکار"], ["3D specimen · click a dot to explore", "نمونهٔ سه‌بعدی · برای کاوش روی نقطه‌ها بزن"],
    ["Close", "بستن"], ["Preparing the", "در حال آماده‌سازی"],
    ["Key facts", "اطلاعات کلیدی"], ["Size", "اندازه"], ["Weight", "وزن"], ["Daily", "روزانه"],
    ["Location", "محل قرارگیری"], ["Blood supply", "خون‌رسانی"], ["Function", "کارکرد"],
    ["Medical importance", "اهمیت پزشکی"], ["Did you know", "می‌دونستی؟"],
    ["View lesson", "دیدن درس"], ["Animate", "نمایش حرکت"], ["Quiz", "آزمون"],
    ["Learning is", "یادگیری یعنی"], ["an act of curiosity.", "دنبال کردن کنجکاوی."], ["Keep exploring!", "به کاوش ادامه بده!"],
    ["Microscopic view", "نمای میکروسکوپی"], ["Compare organs", "مقایسهٔ اندام‌ها"],
    ["Function animation", "پویانمایی کارکرد"], ["Clinical notes", "یادداشت‌های بالینی"],
    ["Common conditions", "بیماری‌های رایج"], ["Where it works", "جایگاهش در بدن"],
    ["Explore tissue", "بررسی بافت"], ["Open comparison", "باز کردن مقایسه"],
    ["Play animation", "پخش پویانمایی"], ["See all", "دیدن همه"], ["See the system", "دیدن دستگاه"],
    ["Play the heart function animation", "پخش پویانمایی عملکرد قلب"],
    ["See where the heart sits in the body", "دیدن جای قلب در بدن"],
    ["Guided discovery", "کاوش راهنما"], ["Organ comparison", "مقایسهٔ اندام‌ها"],
    ["Comparing", "در حال مقایسه"], ["vs.", "در برابر"], ["Reference", "مرجع"], ["Scale", "مقیاس"],
    ["Close comparison", "بستن مقایسه"], ["Continue exploring", "ادامهٔ کاوش"],
    ["Follow the highlighted structures, rotate the specimen, and connect form with function. This short study moment is designed to build a durable mental model.", "بخش‌های مشخص‌شده رو دنبال کن، نمونه رو بچرخون و ارتباط شکل و کارکردش رو ببین. این مرور کوتاه کمک می‌کنه تصویر ماندگارتری از اندام توی ذهنت بسازی."],
    ["Which statement best describes the", "کدوم عبارت دربارهٔ"],
    ["It plays a specialized role in maintaining the body", "نقش تخصصی و مهمی در حفظ بدن داره"],
    ["It works completely independently", "کاملاً مستقل از بقیهٔ بدن کار می‌کنه"],
    ["It is active only during sleep", "فقط موقع خواب فعاله"], ["System", "دستگاه"], ["Primary role", "نقش اصلی"],

    ["Heart", "قلب"], ["Cor", "قلب"], ["Cardiovascular", "قلبی‌عروقی"],
    ["A muscular organ that pumps blood throughout the body, delivering oxygen and nutrients to every cell.", "اندامی عضلانی که خون رو در سراسر بدن پمپ می‌کنه تا اکسیژن و مواد مغذی به تک‌تک سلول‌ها برسه."],
    ["The tireless pump", "پمپ خستگی‌ناپذیر"], ["About the size of your fist", "تقریباً هم‌اندازهٔ مشتت"],
    ["250–350 g", "۲۵۰ تا ۳۵۰ گرم"], ["Behind the sternum, slightly left", "پشت استخوان جناغ، کمی متمایل به چپ"],
    ["Circulates oxygenated blood", "خون اکسیژن‌دار رو به گردش درمیاره"], ["Beats about 100,000 times", "حدود ۱۰۰٬۰۰۰ بار می‌زنه"],
    ["Its electrical rhythm coordinates every heartbeat.", "ریتم الکتریکی قلب، هر ضربان رو هماهنگ می‌کنه."],
    ["Left and right coronary arteries", "سرخرگ‌های کرونری چپ و راست"],
    ["It beats roughly 2.5 billion times in an average lifetime, and starts before you are born.", "در طول یک عمر معمولی نزدیک به ۲٫۵ میلیارد بار می‌زنه و کارش رو پیش از تولد شروع می‌کنه."],
    ["Cardiac muscle tissue", "بافت ماهیچه‌ای قلب"], ["Heart vs. brain", "قلب در برابر مغز"],
    ["Aorta", "آئورت"], ["Main artery", "سرخرگ اصلی"], ["Left Atrium", "دهلیز چپ"],
    ["Receives oxygenated blood", "خون اکسیژن‌دار رو دریافت می‌کنه"], ["Right Atrium", "دهلیز راست"],
    ["Receives venous blood", "خون وریدی رو دریافت می‌کنه"], ["Left Ventricle", "بطن چپ"],
    ["Pumps to the body", "خون رو به بدن پمپ می‌کنه"], ["Right Ventricle", "بطن راست"],
    ["Pumps to the lungs", "خون رو به ریه‌ها پمپ می‌کنه"], ["Mitral Valve", "دریچهٔ میترال"], ["Prevents backflow", "جلوی برگشت خون رو می‌گیره"],

    ["Brain", "مغز"], ["Encephalon", "مغز"], ["Nervous System", "دستگاه عصبی"],
    ["The body’s command center, integrating sensation, memory, emotion, and precise movement.", "مرکز فرماندهی بدن که حس، حافظه، احساس و حرکت‌های دقیق رو با هم هماهنگ می‌کنه."],
    ["The universe within", "جهانی درون ما"], ["Roughly two clenched fists", "تقریباً به اندازهٔ دو مشت بسته"], ["1.3–1.4 kg", "۱٫۳ تا ۱٫۴ کیلوگرم"],
    ["Protected within the skull", "درون جمجمه محافظت می‌شه"], ["Processes and coordinates signals", "پیام‌ها رو پردازش و هماهنگ می‌کنه"],
    ["Uses about 20% of the body’s energy", "حدود ۲۰٪ انرژی بدن رو مصرف می‌کنه"],
    ["Billions of neurons communicate through electrical and chemical signals.", "میلیاردها نورون با پیام‌های الکتریکی و شیمیایی با هم ارتباط دارن."],
    ["Internal carotid and vertebral arteries", "سرخرگ‌های کاروتید داخلی و مهره‌ای"],
    ["It has no pain receptors of its own — a headache is felt in the tissues around it.", "خود مغز گیرندهٔ درد نداره؛ دردِ سردرد در بافت‌های اطرافش حس می‌شه."],
    ["Cerebral cortex", "قشر مخ"], ["Brain vs. eye", "مغز در برابر چشم"],
    ["Frontal Lobe", "لوب پیشانی"], ["Planning & movement", "برنامه‌ریزی و حرکت"], ["Parietal Lobe", "لوب آهیانه‌ای"],
    ["Sensory integration", "یکپارچه‌سازی حسی"], ["Temporal Lobe", "لوب گیجگاهی"], ["Memory & hearing", "حافظه و شنوایی"],
    ["Cerebellum", "مخچه"], ["Balance & coordination", "تعادل و هماهنگی"],

    ["Lungs", "ریه‌ها"], ["Pulmones", "ریه‌ها"], ["Respiratory System", "دستگاه تنفسی"],
    ["Paired organs that draw in air and trade oxygen for carbon dioxide across a vast, delicate surface.", "دو اندام ظریف که هوا رو به داخل می‌کشن و در سطحی گسترده، اکسیژن رو با دی‌اکسید کربن جابه‌جا می‌کنن."],
    ["The breath of life", "نَفَس زندگی"], ["Each about 25 cm tall", "قد هرکدوم حدود ۲۵ سانتی‌متر"], ["About 1 kg for the pair", "مجموعاً حدود ۱ کیلوگرم"],
    ["Either side of the heart, within the ribcage", "دو طرف قلب، داخل قفسهٔ سینه"], ["Exchanges oxygen for carbon dioxide", "اکسیژن و دی‌اکسید کربن رو جابه‌جا می‌کنه"],
    ["Moves around 11,000 L of air", "حدود ۱۱٬۰۰۰ لیتر هوا جابه‌جا می‌کنه"],
    ["Alveoli fold a tennis-court-sized exchange surface into the chest.", "کیسه‌های هوایی، سطح تبادلی به اندازهٔ یک زمین تنیس رو در قفسهٔ سینه جا می‌دن."],
    ["Pulmonary and bronchial arteries", "سرخرگ‌های ریوی و برونشی"],
    ["The right lung carries three lobes and the left only two, leaving a notch for the heart.", "ریهٔ راست سه لوب و ریهٔ چپ فقط دو لوب داره تا جا برای قلب باز بمونه."],
    ["Alveolar tissue", "بافت کیسه‌های هوایی"], ["Lungs vs. heart", "ریه‌ها در برابر قلب"],
    ["Trachea", "نای"], ["Carries air to the lungs", "هوا رو به ریه‌ها می‌رسونه"], ["Right Lung", "ریهٔ راست"], ["Three lobes", "سه لوب"],
    ["Left Lung", "ریهٔ چپ"], ["Two lobes, room for the heart", "دو لوب؛ با فضایی برای قلب"], ["Bronchus", "نایژه"],
    ["Branching airway", "راه هوایی شاخه‌شونده"], ["Lung Base", "قاعدهٔ ریه"], ["Rests on the diaphragm", "روی دیافراگم قرار می‌گیره"],

    ["Liver", "کبد"], ["Hepar", "کبد"], ["Digestive System", "دستگاه گوارش"],
    ["A remarkable metabolic organ that filters blood, processes nutrients, and produces bile.", "اندام شگفت‌انگیز سوخت‌وساز که خون رو پالایش می‌کنه، مواد مغذی رو پردازش می‌کنه و صفرا می‌سازه."],
    ["The quiet alchemist", "کیمیاگر خاموش"], ["About the size of a football", "تقریباً به اندازهٔ یک توپ فوتبال"], ["1.4–1.6 kg", "۱٫۴ تا ۱٫۶ کیلوگرم"],
    ["Upper right abdomen", "بخش بالای راست شکم"], ["Metabolism, detoxification & bile", "سوخت‌وساز، سم‌زدایی و تولید صفرا"],
    ["Performs more than 500 functions", "بیش از ۵۰۰ کار انجام می‌ده"], ["It can regenerate a substantial portion of lost tissue.", "می‌تونه بخش بزرگی از بافت ازدست‌رفته‌اش رو بازسازی کنه."],
    ["Hepatic artery and portal vein", "سرخرگ کبدی و ورید باب"], ["It is the only human organ that can regrow to full size from a fraction of itself.", "تنها اندام انسانه که می‌تونه از بخشی کوچک دوباره به اندازهٔ کامل برگرده."],
    ["Hepatic lobules", "لوبول‌های کبدی"], ["Liver vs. intestine", "کبد در برابر روده"], ["Right Lobe", "لوب راست"],
    ["Largest hepatic lobe", "بزرگ‌ترین لوب کبد"], ["Left Lobe", "لوب چپ"], ["Crosses the midline", "از خط میانی عبور می‌کنه"],
    ["Portal Vein", "ورید باب"], ["Nutrient-rich inflow", "ورودی سرشار از مواد مغذی"],

    ["Kidneys", "کلیه‌ها"], ["Renes", "کلیه‌ها"], ["Urinary System", "دستگاه ادراری"],
    ["Paired filtration organs that balance fluids, electrolytes, blood pressure, and waste removal.", "دو اندام تصفیه‌کننده که مایعات، الکترولیت‌ها و فشار خون رو تنظیم و مواد زائد رو دفع می‌کنن."],
    ["The master filters", "فیلترهای حرفه‌ای"], ["Each is about a computer mouse", "هرکدوم تقریباً به اندازهٔ ماوس کامپیوتره"], ["120–170 g each", "هرکدوم ۱۲۰ تا ۱۷۰ گرم"],
    ["Either side of the spine below the ribs", "دو طرف ستون فقرات، زیر دنده‌ها"], ["Filters blood and forms urine", "خون رو تصفیه و ادرار تولید می‌کنه"],
    ["Filters roughly 180 L of fluid", "حدود ۱۸۰ لیتر مایع رو تصفیه می‌کنه"], ["Nephrons fine-tune the chemistry of the bloodstream.", "نفرون‌ها ترکیب شیمیایی خون رو با دقت تنظیم می‌کنن."],
    ["Renal arteries", "سرخرگ‌های کلیوی"], ["They reclaim almost everything they filter — only about 1–2 L leaves the body as urine.", "تقریباً همه‌چیز رو دوباره جذب می‌کنن و فقط حدود ۱ تا ۲ لیتر به شکل ادرار از بدن خارج می‌شه."],
    ["Renal cortex", "قشر کلیه"], ["Kidneys vs. liver", "کلیه‌ها در برابر کبد"], ["Renal Cortex", "قشر کلیه"],
    ["Outer filtering layer", "لایهٔ بیرونی تصفیه"], ["Renal Medulla", "مغز کلیه"], ["Concentrates urine", "ادرار رو غلیظ می‌کنه"],
    ["Ureter", "حالب"], ["Carries urine", "ادرار رو منتقل می‌کنه"],

    ["Eye", "چشم"], ["Oculus", "چشم"], ["Sensory System", "دستگاه حسی"],
    ["A precision sensory organ that converts focused light into neural signals interpreted as vision.", "اندامی حسی و دقیق که نور متمرکز رو به پیام عصبی تبدیل می‌کنه تا به شکل تصویر درک بشه."],
    ["A window made of light", "پنجره‌ای از نور"], ["About 24 mm across", "حدود ۲۴ میلی‌متر قطر"], ["Around 7.5 g", "حدود ۷٫۵ گرم"],
    ["Within the bony orbit", "داخل کاسهٔ استخوانی چشم"], ["Captures and focuses light", "نور رو دریافت و متمرکز می‌کنه"], ["Makes thousands of tiny movements", "هزاران حرکت ظریف انجام می‌ده"],
    ["The retina is an extension of the central nervous system.", "شبکیه در واقع امتداد دستگاه عصبی مرکزیه."], ["Ophthalmic artery", "سرخرگ چشمی"],
    ["The cornea carries no blood vessels at all; it takes oxygen directly from the air.", "قرنیه هیچ رگ خونی‌ای نداره و اکسیژن رو مستقیم از هوا می‌گیره."],
    ["Retinal layers", "لایه‌های شبکیه"], ["Eye vs. brain", "چشم در برابر مغز"], ["Cornea", "قرنیه"],
    ["Clear focusing surface", "سطح شفافِ متمرکزکننده"], ["Iris", "عنبیه"], ["Controls light entry", "ورود نور رو کنترل می‌کنه"],
    ["Optic Nerve", "عصب بینایی"], ["Carries visual signals", "پیام‌های بینایی رو منتقل می‌کنه"],

    ["Intestine", "روده"], ["Intestinum", "روده"],
    ["A folded digestive passage where nutrients are absorbed and the microbiome supports whole-body health.", "مسیر پیچ‌خوردهٔ گوارش که مواد مغذی رو جذب می‌کنه و میکروبیومش به سلامت کل بدن کمک می‌کنه."],
    ["The inner garden", "باغ درونی"], ["About 6–7 m when extended", "در حالت بازشده حدود ۶ تا ۷ متر"], ["Varies with contents", "بسته به محتویات متفاوته"],
    ["Central and lower abdomen", "مرکز و بخش پایینی شکم"], ["Digestion and nutrient absorption", "گوارش و جذب مواد مغذی"], ["Hosts trillions of microorganisms", "میزبان تریلیون‌ها میکروارگانیسمه"],
    ["Its surface is amplified by folds, villi, and microvilli.", "چین‌ها، پرزها و ریزپرزها سطح جذبش رو چندبرابر می‌کنن."],
    ["Superior and inferior mesenteric arteries", "سرخرگ‌های مزانتریک بالایی و پایینی"], ["Its lining renews itself every few days — the fastest turnover of any tissue in the body.", "پوشش داخلیش هر چند روز یک‌بار نو می‌شه؛ سریع‌ترین نوسازی بافتی در بدنه."],
    ["Intestinal villi", "پرزهای روده"], ["Intestine vs. liver", "روده در برابر کبد"], ["Duodenum", "دوازدهه"],
    ["First small-intestine segment", "اولین بخش رودهٔ باریک"], ["Jejunum", "تهی‌روده"], ["Major absorption region", "ناحیهٔ اصلی جذب"],
    ["Colon", "رودهٔ بزرگ"], ["Reclaims water", "آب رو بازجذب می‌کنه"],

    ["Pancreas", "لوزالمعده"], ["Endocrine System", "دستگاه درون‌ریز"],
    ["A dual-purpose gland that releases digestive enzymes into the gut and the hormones that steady blood sugar.", "غده‌ای دوکاره که آنزیم‌های گوارشی رو وارد روده و هورمون‌های تنظیم‌کنندهٔ قند خون رو وارد خون می‌کنه."],
    ["The quiet regulator", "تنظیم‌کنندهٔ آرام"], ["About 15 cm long", "حدود ۱۵ سانتی‌متر طول"], ["70–100 g", "۷۰ تا ۱۰۰ گرم"],
    ["Behind the stomach, across the upper abdomen", "پشت معده، در بخش بالایی شکم"], ["Digestive enzymes and insulin", "آنزیم‌های گوارشی و انسولین"],
    ["Makes about 1.5 L of enzyme-rich juice", "حدود ۱٫۵ لیتر شیرهٔ سرشار از آنزیم می‌سازه"], ["Islets of Langerhans release insulin and glucagon to balance blood sugar.", "جزایر لانگرهانس با آزادسازی انسولین و گلوکاگون، قند خون رو متعادل می‌کنن."],
    ["Splenic and pancreaticoduodenal arteries", "سرخرگ‌های طحالی و پانکراتیکودئودنال"], ["Barely 2% of it makes hormones; the rest is given over to digestive enzymes.", "فقط حدود ۲٪ آن هورمون می‌سازه و بقیه‌اش به تولید آنزیم‌های گوارشی اختصاص داره."],
    ["Pancreatic acini", "آسین‌های پانکراس"], ["Pancreas vs. liver", "لوزالمعده در برابر کبد"], ["Head", "سر"],
    ["Cradled by the duodenum", "در حلقهٔ دوازدهه جا گرفته"], ["Body", "بدنه"], ["Crosses the spine", "از روی ستون فقرات می‌گذره"],
    ["Tail", "دم"], ["Reaches the spleen", "تا طحال می‌رسه"], ["Pancreatic Duct", "مجرای پانکراس"], ["Drains enzymes to the gut", "آنزیم‌ها رو به روده می‌ریزه"],

    ["Skin", "پوست"], ["Integumentum", "پوست"], ["Integumentary System", "دستگاه پوششی"],
    ["The body’s largest organ — a living barrier that senses touch, holds in water, and regulates temperature.", "بزرگ‌ترین اندام بدن؛ سدی زنده که لمس رو حس می‌کنه، آب رو در بدن نگه می‌داره و دما رو تنظیم می‌کنه."],
    ["The living boundary", "مرز زنده"], ["About 2 m² spread flat", "در حالت باز حدود ۲ مترمربع"], ["3.5–5 kg", "۳٫۵ تا ۵ کیلوگرم"],
    ["Covering the entire body", "تمام بدن رو می‌پوشونه"], ["Protects, senses, and cools", "محافظت می‌کنه، حس می‌کنه و بدن رو خنک نگه می‌داره"],
    ["Sheds around 500 million cells", "حدود ۵۰۰ میلیون سلول می‌ریزه"], ["Three layers — epidermis, dermis, and hypodermis — each with a distinct job.", "سه لایهٔ روپوست، درم و زیرپوست داره که هرکدوم کار مشخصی انجام می‌دن."],
    ["Dermal vascular plexus", "شبکهٔ عروقی پوست"], ["A single square centimetre can hold hundreds of sweat glands and metres of blood vessels.", "فقط یک سانتی‌مترمربع پوست می‌تونه صدها غدهٔ عرق و چندین متر رگ خونی داشته باشه."],
    ["Epidermal layers", "لایه‌های روپوست"], ["Skin vs. intestine", "پوست در برابر روده"], ["Epidermis", "روپوست"],
    ["Outer protective layer", "لایهٔ محافظ بیرونی"], ["Dermis", "درم"], ["Nerves, vessels & glands", "عصب‌ها، رگ‌ها و غده‌ها"],
    ["Hypodermis", "زیرپوست"], ["Fat and insulation", "چربی و عایق حرارتی"], ["Hair Follicle", "فولیکول مو"], ["Anchors each hair", "ریشهٔ هر مو رو نگه می‌داره"],

    ["Coronary artery disease", "بیماری عروق کرونر"], ["Arrhythmia", "آریتمی"], ["Heart valve disorders", "اختلالات دریچه‌ای قلب"],
    ["Heart failure", "نارسایی قلبی"], ["Cardiomyopathy", "کاردیومیوپاتی"], ["Myocarditis", "میوکاردیت"], ["Atrial fibrillation", "فیبریلاسیون دهلیزی"], ["Congenital heart defects", "نقص‌های مادرزادی قلب"],
    ["Migraine", "میگرن"], ["Stroke", "سکتهٔ مغزی"], ["Neurodegenerative disease", "بیماری‌های تحلیل‌برندهٔ عصبی"], ["Epilepsy", "صرع"],
    ["Traumatic brain injury", "آسیب تروماتیک مغز"], ["Meningitis", "مننژیت"], ["Multiple sclerosis", "ام‌اس"], ["Brain aneurysm", "آنوریسم مغزی"],
    ["Asthma", "آسم"], ["COPD", "بیماری مزمن انسدادی ریه"], ["Pneumonia", "ذات‌الریه"], ["Pulmonary embolism", "آمبولی ریه"],
    ["Pulmonary fibrosis", "فیبروز ریوی"], ["Bronchitis", "برونشیت"], ["Cystic fibrosis", "فیبروز کیستیک"], ["Lung cancer", "سرطان ریه"],
    ["Fatty liver disease", "کبد چرب"], ["Hepatitis", "هپاتیت"], ["Cirrhosis", "سیروز"], ["Gallstones", "سنگ صفرا"],
    ["Haemochromatosis", "هموکروماتوز"], ["Liver cancer", "سرطان کبد"], ["Autoimmune hepatitis", "هپاتیت خودایمنی"], ["Portal hypertension", "پرفشاری ورید باب"],
    ["Kidney stones", "سنگ کلیه"], ["Chronic kidney disease", "بیماری مزمن کلیه"], ["Urinary infection", "عفونت ادراری"], ["Glomerulonephritis", "گلومرولونفریت"],
    ["Polycystic kidney disease", "کلیهٔ پلی‌کیستیک"], ["Renal hypertension", "فشار خون کلیوی"], ["Acute kidney injury", "آسیب حاد کلیه"], ["Nephrotic syndrome", "سندرم نفروتیک"],
    ["Myopia", "نزدیک‌بینی"], ["Cataract", "آب‌مروارید"], ["Glaucoma", "آب‌سیاه"], ["Macular degeneration", "تباهی لکهٔ زرد"],
    ["Retinal detachment", "جداشدگی شبکیه"], ["Dry eye disease", "خشکی چشم"], ["Astigmatism", "آستیگماتیسم"], ["Conjunctivitis", "ورم ملتحمه"],
    ["Irritable bowel syndrome", "سندرم رودهٔ تحریک‌پذیر"], ["Inflammatory bowel disease", "بیماری التهابی روده"], ["Celiac disease", "سلیاک"], ["Diverticulitis", "دیورتیکولیت"],
    ["Intestinal obstruction", "انسداد روده"], ["Colorectal polyps", "پولیپ رودهٔ بزرگ"], ["Crohn's disease", "بیماری کرون"], ["Lactose intolerance", "عدم تحمل لاکتوز"],
    ["Pancreatitis", "پانکراتیت"], ["Type 1 diabetes", "دیابت نوع ۱"], ["Pancreatic cancer", "سرطان لوزالمعده"], ["Type 2 diabetes", "دیابت نوع ۲"],
    ["Exocrine insufficiency", "نارسایی برون‌ریز"], ["Pancreatic cysts", "کیست لوزالمعده"], ["Gallstone pancreatitis", "پانکراتیت صفراوی"], ["Insulinoma", "انسولینوما"],
    ["Eczema", "اگزما"], ["Psoriasis", "پسوریازیس"], ["Melanoma", "ملانوما"], ["Acne vulgaris", "آکنه"],
    ["Cellulitis", "سلولیت عفونی"], ["Contact dermatitis", "درماتیت تماسی"], ["Rosacea", "روزاسه"], ["Vitiligo", "ویتیلیگو"]
  ];

  const exact = new Map(pairs);
  const ordered = [...pairs].sort((a, b) => b[0].length - a[0].length);
  const organNames = new Map([
    ["heart", "قلب"], ["brain", "مغز"], ["lungs", "ریه‌ها"], ["liver", "کبد"],
    ["kidneys", "کلیه‌ها"], ["eye", "چشم"], ["eyeball", "چشم"], ["intestine", "روده"],
    ["pancreas", "لوزالمعده"], ["skin", "پوست"]
  ]);

  function translatedName(name) {
    return exact.get(name) || organNames.get(name.toLowerCase()) || name;
  }

  function translateValue(value) {
    if (!value) return value;
    if (value.trim() === "?") return value.replace("?", "؟");
    if (!/[A-Za-z]/.test(value)) return value;
    const leading = value.match(/^\s*/)?.[0] || "";
    const trailing = value.match(/\s*$/)?.[0] || "";
    const core = value.slice(leading.length, value.length - trailing.length || undefined);
    if (exact.has(core)) return leading + exact.get(core) + trailing;
    if (organNames.has(core.toLowerCase())) return leading + organNames.get(core.toLowerCase()) + trailing;

    let match = core.match(/^Which statement best describes the (.+)\?$/i);
    if (match) return `کدوم عبارت «${translatedName(match[1])}» رو بهتر توصیف می‌کنه؟`;
    match = core.match(/^(.+) quick quiz$/i);
    if (match) return `آزمون کوتاه ${translatedName(match[1])}`;
    match = core.match(/^Preparing the (.+)$/);
    if (match) return `در حال آماده‌سازی ${translatedName(match[1])}`;
    match = core.match(/^Continue exploring (.+)$/);
    if (match) return `ادامهٔ کاوش: ${translatedName(match[1])}`;
    match = core.match(/^The (.+)$/);
    if (match) return translatedName(match[1]);
    match = core.match(/^(.+) interactive viewer$/);
    if (match) return `نمایشگر تعاملی ${translatedName(match[1])}`;
    match = core.match(/^(.+) learning resources$/);
    if (match) return `منابع یادگیری ${translatedName(match[1])}`;
    match = core.match(/^(.+) thumbnail (.+)$/);
    if (match) return `تصویر بندانگشتی ${translatedName(match[1])} ${translateLoose(match[2])}`;
    match = core.match(/^(.+): (.+)$/);
    if (match) return `${translatedName(match[1])}: ${translateLoose(match[2])}`;
    return value;
  }

  function translateLoose(value) {
    let result = value;
    for (const [source, target] of ordered) result = result.split(source).join(target);
    return result;
  }

  function translateNode(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      const next = translateValue(root.nodeValue);
      if (next !== root.nodeValue) root.nodeValue = next;
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;

    const element = root.nodeType === Node.ELEMENT_NODE ? root : null;
    if (element) {
      for (const attr of ["aria-label", "title", "placeholder", "alt"]) {
        if (element.hasAttribute(attr)) {
          const value = element.getAttribute(attr);
          const next = translateValue(value) === value ? translateLoose(value) : translateValue(value);
          if (next !== value) element.setAttribute(attr, next);
        }
      }
    }

    for (const child of root.childNodes) translateNode(child);
  }

  function startLocalization() {
    document.documentElement.lang = "fa";
    document.documentElement.dir = "rtl";
    document.title = "آتلیهٔ آناتومی — آناتومی رو مثل یک هنرمند یاد بگیر";
    translateNode(document);

    const observer = new MutationObserver((mutations) => {
      observer.disconnect();
      for (const mutation of mutations) {
        if (mutation.type === "characterData") translateNode(mutation.target);
        for (const node of mutation.addedNodes) translateNode(node);
      }
      observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true });
    });
    observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true });
  }

  const schedule = () => window.setTimeout(startLocalization, 900);
  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
})();
