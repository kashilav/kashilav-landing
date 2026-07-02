// ===================================================
// CONFIGURAÇÃO DA MARCA — ponto único de troca
// Quando o nome definitivo for decidido, altere APENAS
// este bloco (+ <title> e <meta description> no index.html).
// ===================================================
const BRAND = {
  name: 'KASHILAV',          // nome exibido em todo o site
  whatsapp: '000000000000'   // número de WhatsApp com código do país, sem "+" (ex: 573001234567)
};

// Aplica o nome da marca em todos os elementos .brand-name
function applyBrand() {
  document.querySelectorAll('.brand-name').forEach(el => { el.textContent = BRAND.name; });
}
applyBrand();

// ===== Traduções ES / EN =====
const i18n = {
  es: {
    // NAV
    nav_dif:"Diferenciales", nav_planes:"Planes", nav_proceso:"Cómo funciona",
    nav_faq:"FAQ", nav_cta:"Diagnóstico gratis",

    // HERO
    hero_badge:"Especialistas en clínicas estéticas · Bogotá",
    hero_title:'Más pacientes para tu clínica — <em>locales y del exterior.</em>',
    hero_sub:"La agencia de performance enfocada exclusivamente en clínicas estéticas y turismo médico en Bogotá. Precios transparentes y reporte de retorno por procedimiento — no por \"me gusta\".",
    hero_cta1:"Agenda tu diagnóstico gratis",
    hero_cta2:"Ver planes y precios",
    hero_t1:"Campañas bilingües", hero_t2:"por procedimiento", hero_t3:"Precios públicos",

    // STATEMENTS
    stmt1:'Pacientes reales.<br><em>No "me gusta".</em>',
    stmt2:'Tu clínica, llena.<br><em>Local y del mundo.</em>',

    // PROBLEMA
    prob_title:"¿Tu clínica es excelente, pero la agenda no se llena?",
    prob_sub:"La mayoría de las clínicas en Bogotá dependen del boca a boca y pierden pacientes de alto valor que ya están buscando en Google e Instagram — incluyendo turistas médicos de EE.UU., Canadá y Venezuela.",

    // EYEBROWS
    eyebrow_dif:"Especialización", eyebrow_pq:"Fit", eyebrow_test:"Resultados",
    eyebrow_planes:"Planes", eyebrow_proc:"Proceso", eyebrow_faq:"Dudas",

    // DIFERENCIALES (bento)
    dif_title:"Lo que nos hace diferentes",
    dif1_t:"Solo clínicas estéticas", dif1_p:"Nos especializamos en tu sector. Hablamos el idioma de tus procedimientos y de tus pacientes.",
    dif2_t:"Turismo médico bilingüe", dif2_p:"Pacientes internacionales con campañas en español e inglés — un canal de alto ticket que casi nadie trabaja.",
    dif3_t:"ROI por procedimiento", dif3_p:"Cuántos pacientes y cuánta facturación generó cada peso invertido — por procedimiento.",
    dif4_t:"Precios transparentes", dif4_p:"Nuestros planes están publicados y la inversión se divide en tres partes claras: honorario, pauta y tecnología — la pauta y la tecnología siempre a tu nombre.",
    chip_fee:"Honorario", chip_pauta:"Pauta", chip_tech:"Tecnología",

    // PARA QUIÉN
    pq_title:"¿Es para tu clínica?",
    pq_yes_t:"Es para ti si...",
    pq_yes_1:"Tu clínica ya está activa en Bogotá y tiene procedimientos consolidados",
    pq_yes_2:"Quieres crecer más allá del boca a boca y llenar la agenda con anuncios",
    pq_yes_3:"Tienes presupuesto mínimo de pauta (~US$500/mes en anuncios, aparte de la agencia)",
    pq_yes_4:"Quieres atraer pacientes internacionales de alto ticket",
    pq_yes_5:"Valoras reportes claros con ROI por procedimiento, no vanity metrics",
    pq_no_t:"No es para ti si...",
    pq_no_1:"Acabas de abrir y aún no tienes procedimientos definidos ni equipo médico",
    pq_no_2:"No tienes presupuesto para pauta publicitaria (los anuncios son la base del resultado)",
    pq_no_3:"Buscas una agencia genérica que haga de todo para todos los sectores",
    pq_no_4:"Esperas resultados sin inversión sostenida mínima de 60 días",

    // TESTIMONIOS
    test_title:"Lo que dicen los médicos que ya trabajan con nosotros",
    met1_n:"+40", met1_l:"leads calificados / mes (promedio)",
    met2_n:"3.2x", met2_l:"ROI promedio en los primeros 60 días",
    met3_n:"100%", met3_l:"cuentas de anuncios en manos del cliente",
    ejemplo_tag:"ejemplo",
    test1_q:'"En el primer mes ya teníamos 38 leads de rinoplastia. Nunca habíamos tenido tanta agenda llena con pacientes que ya iban decididos."',
    test1_n:"Dr. Rodríguez", test1_c:"Clínica Estética · Bogotá", test1_r:"38 leads en el primer mes · ROI 3.8x",
    test2_q:'"Trabajamos con otra agencia antes y solo nos traían \'me gusta\'. Ahora el reporte me muestra exactamente cuánto generó cada anuncio por procedimiento."',
    test2_n:"Dra. Martínez", test2_c:"Centro Médico Estético · Bogotá", test2_r:"De 0 a 25 pacientes internacionales en 90 días",
    test3_q:'"Lo mejor es que las cuentas de anuncios son mías. Si mañana decido cambiar de agencia, no pierdo nada. Eso genera confianza desde el día uno."',
    test3_n:"Dr. Vargas", test3_c:"Clínica de Cirugía Plástica · Bogotá", test3_r:"+60% de ocupación en cirugías corporales",
    test_cta:"Quiero resultados como estos",

    // PLANES (4 planos — alinhado à precificação fechada)
    plan_title:"Planes y precios",
    plan_sub:"Inversión transparente en tres partes: honorario de gestión, pauta publicitaria y tecnología. La pauta y la tecnología van aparte y siempre a tu nombre — tú ves cada peso.",
    p_tag:"Más elegido", p_cta:"Quiero este plan",
    p1_t:"Esencial", p1_for:"Clínica pequeña o primera gestión profesional",
    p1_1:"Meta Ads (pacientes locales)", p1_2:"4 creativos nuevos al mes", p1_3:"WhatsApp con guion de calificación", p1_4:"Reporte mensual + reunión por video",
    p2_t:"Performance", p2_for:"Clínica que quiere crecer en serio",
    p2_1:"Todo lo del plan Esencial", p2_2:"Google Ads (búsqueda local)", p2_3:"6–8 creativos al mes", p2_4:"Reactivación de pacientes existentes", p2_5:"Reporte quincenal + 2 reuniones/mes",
    p3_t:"Escala", p3_for:"Multi-sede o alto volumen",
    p3_1:"Todo lo del plan Performance", p3_2:"Chatbot de WhatsApp 24/7 + CRM", p3_3:"10–12 creativos al mes", p3_4:"Dashboard de ROI en vivo", p3_5:"Reunión semanal de resultados",
    p4_t:"Turismo Médico", p4_for:"Pacientes internacionales",
    p4_1:"Todo lo del plan Escala", p4_2:"Campañas internacionales EN/ES", p4_3:"Landing pages bilingües por procedimiento", p4_4:"Coordinación de paciente internacional",
    p4_roi:"Un paciente internacional de rinoplastia representa US$3.000–8.000 para tu clínica. Con un solo paciente al mes, el plan se paga solo.",
    plan_guar:"Garantía de 60 días: si no generamos el volumen de leads calificados acordado en el diagnóstico, el segundo mes de gestión es gratis.",

    // PROCESO
    proc_title:"Cómo funciona",
    s1_time:"Semana 1",
    s1_t:"Diagnóstico gratis", s1_p:"Analizamos en vivo tu presencia digital, tus competidores y tus procedimientos estrella. Te mostramos exactamente qué está dejando pacientes sobre la mesa — en menos de 48 horas.",
    s2_time:"Semanas 2–4",
    s2_t:"Estrategia y campañas", s2_p:"Montamos las campañas en tus propias cuentas de anuncios (Meta + Google). Configuramos el WhatsApp con guion de calificación y el reporte de ROI. Reunión de resultados incluida.",
    s3_time:"Mes 2 en adelante",
    s3_t:"Pacientes y reporte", s3_p:"Recibes pacientes calificados de forma constante y un reporte claro de retorno por procedimiento — no por \"me gusta\". Tú ves cada peso invertido y lo que generó.",

    // GARANTÍA
    gar_title:"Garantía de resultado real",
    gar_text:"Si en 60 días no generamos el volumen de leads calificados acordado, el segundo mes de gestión es gratis. Sin letras pequeñas.",

    // FAQ
    faq_title:"Preguntas frecuentes",
    faq1_q:"¿Qué pasa si ya trabajé con otra agencia y no funcionó?",
    faq1_a:"Es la situación más común que vemos. La mayoría de las agencias genéricas optimizan por \"me gusta\" o alcance, no por pacientes reales. Nuestra primera sesión — el diagnóstico gratuito — analiza exactamente qué falló antes y por qué. Solo arrancamos si tenemos claridad de que podemos hacerlo mejor. Y si en 60 días no generamos el volumen de leads calificados acordado, el segundo mes de gestión es gratis.",
    faq2_q:"¿En cuánto tiempo veo resultados?",
    faq2_a:"Los primeros leads calificados suelen aparecer entre la semana 2 y la semana 4, dependiendo del presupuesto de pauta y el procedimiento. Resultados consistentes y escalables se consolidan entre el mes 2 y el mes 3. Por eso nuestra garantía es de 60 días: es el tiempo mínimo honesto para juzgar una campaña.",
    faq3_q:"¿Cómo sé que el ROI será positivo antes de pagar?",
    faq3_a:"No puedes saberlo con certeza antes de arrancar — nadie que sea honesto te lo prometería. Lo que sí hacemos: en el diagnóstico gratuito estimamos el costo por lead esperado para tu procedimiento en Bogotá y acordamos juntos una meta de leads calificados. Si los números no cierran, te lo decimos antes de que pagues un peso. Y si arrancamos y en 60 días no alcanzamos la meta acordada, el segundo mes de gestión es gratis.",
    faq4_q:"¿Entienden los procedimientos estéticos o son una agencia genérica?",
    faq4_a:"Solo trabajamos con clínicas estéticas. Conocemos la diferencia entre rinoplastia abierta y cerrada, entre toxina botulínica y fillers, y cómo cada procedimiento tiene un ciclo de decisión diferente en el paciente. Eso cambia el copy del anuncio, el tipo de segmentación y la página de destino. Una agencia genérica no puede hacer eso bien.",
    faq5_q:"¿Tienen experiencia con turismo médico y pacientes internacionales?",
    faq5_a:"Sí. Nuestras campañas bilingües (ES/EN) están diseñadas específicamente para atraer pacientes de EE.UU., Canadá y Venezuela que buscan procedimientos en Bogotá a precio competitivo. Manejamos la coordinación de contenido y las landing pages en inglés, y entendemos las diferencias culturales en el proceso de decisión de un paciente internacional.",
    faq6_q:"¿Hay permanencia mínima? ¿De quién son las cuentas de anuncios?",
    faq6_a:"No hay permanencia mínima. Trabajamos mes a mes porque creemos que el cliente debe quedarse por resultados, no por contrato. Las cuentas de Meta Ads y Google Ads son siempre tuyas — las creamos a tu nombre o trabajamos en las que ya tienes. Si decides salir mañana, te llevas todo el histórico, los públicos y los datos acumulados.",
    faq_cta:"Agenda tu diagnóstico gratis",

    // FORMULARIO
    form_title:"Quiero mi diagnóstico gratis",
    form_sub:"20 minutos. Sin compromiso. Te mostramos exactamente qué mejorar — vengas o no con nosotros.",
    form_nombre_l:"Tu nombre", form_wa_l:"WhatsApp (con código de país)", form_proc_l:"Procedimiento principal de tu clínica",
    form_proc_ph:"Selecciona un procedimiento...",
    proc_rino:"Rinoplastia", proc_botu:"Toxina botulínica / Botox", proc_fill:"Rellenos / Fillers",
    proc_lipo:"Liposucción / Corporal", proc_impl:"Implantes", proc_face:"Tratamientos faciales / Láser",
    proc_odont:"Odontología estética", proc_otro:"Otro",
    form_btn:"Quiero mi diagnóstico gratis",
    form_wa_alt:"¿Prefieres hablar ahora?", form_wa_link:"Escríbenos por WhatsApp",
    form_micro:"Sin permanencia mínima · Sin porcentaje sobre tu pauta · Tus cuentas de anuncios son siempre tuyas.",
    form_pd:"P.D. El diagnóstico es gratuito y lo preparamos en menos de 48 horas.",
    err_nombre:"Por favor ingresa tu nombre.",
    err_wa:"Por favor ingresa tu WhatsApp con código de país.",
    err_proc:"Por favor selecciona el procedimiento principal.",

    // FOOTER
    foot:"Marketing especializado para clínicas estéticas y turismo médico · Bogotá, Colombia"
  },

  en: {
    // NAV
    nav_dif:"Why us", nav_planes:"Plans", nav_proceso:"How it works",
    nav_faq:"FAQ", nav_cta:"Free audit",

    // HERO
    hero_badge:"Aesthetic clinic specialists · Bogotá",
    hero_title:'More patients for your clinic — <em>local and from abroad.</em>',
    hero_sub:"The performance agency focused exclusively on aesthetic clinics and medical tourism in Bogotá. Transparent pricing and ROI reporting per procedure — not per \"like\".",
    hero_cta1:"Book your free audit",
    hero_cta2:"See plans & pricing",
    hero_t1:"Bilingual campaigns", hero_t2:"per procedure", hero_t3:"Public pricing",

    // STATEMENTS
    stmt1:'Real patients.<br><em>Not "likes".</em>',
    stmt2:'Your clinic, full.<br><em>Local and worldwide.</em>',

    // PROBLEMA
    prob_title:"Great clinic, but the calendar won't fill up?",
    prob_sub:"Most clinics in Bogotá rely on word of mouth and lose high-value patients already searching on Google and Instagram — including medical tourists from the US, Canada and Venezuela.",

    // EYEBROWS
    eyebrow_dif:"Specialization", eyebrow_pq:"Fit", eyebrow_test:"Results",
    eyebrow_planes:"Plans", eyebrow_proc:"Process", eyebrow_faq:"Questions",

    // DIFERENCIALES
    dif_title:"What makes us different",
    dif1_t:"Aesthetic clinics only", dif1_p:"We specialize in your sector. We speak the language of your procedures and your patients.",
    dif2_t:"Bilingual medical tourism", dif2_p:"International patients with campaigns in Spanish and English — a high-ticket channel almost nobody works.",
    dif3_t:"ROI per procedure", dif3_p:"How many patients and how much revenue every dollar generated — by procedure.",
    dif4_t:"Transparent pricing", dif4_p:"Our plans are published and the investment splits into three clear parts: fee, ad spend and technology — ad spend and tech always in your name.",
    chip_fee:"Fee", chip_pauta:"Ad spend", chip_tech:"Technology",

    // PARA QUIÉN
    pq_title:"Is it right for your clinic?",
    pq_yes_t:"It's for you if...",
    pq_yes_1:"Your clinic is already active in Bogotá and has established procedures",
    pq_yes_2:"You want to grow beyond word of mouth and fill your calendar with ads",
    pq_yes_3:"You have a minimum ad budget (~US$500/month in ads, separate from the agency fee)",
    pq_yes_4:"You want to attract high-ticket international patients",
    pq_yes_5:"You value clear ROI reports per procedure, not vanity metrics",
    pq_no_t:"It's not for you if...",
    pq_no_1:"You just opened and don't yet have defined procedures or a medical team",
    pq_no_2:"You have no budget for paid advertising (ads are the foundation of results)",
    pq_no_3:"You're looking for a generic agency that does everything for everyone",
    pq_no_4:"You expect results without a sustained minimum investment of 60 days",

    // TESTIMONIOS
    test_title:"What doctors working with us say",
    met1_n:"+40", met1_l:"qualified leads / month (average)",
    met2_n:"3.2x", met2_l:"average ROI in the first 60 days",
    met3_n:"100%", met3_l:"ad accounts in the client's hands",
    ejemplo_tag:"example",
    test1_q:'"In the first month we already had 38 rhinoplasty leads. We\'d never had such a full calendar with patients who were already decided."',
    test1_n:"Dr. Rodríguez", test1_c:"Aesthetic Clinic · Bogotá", test1_r:"38 leads in the first month · 3.8x ROI",
    test2_q:'"We worked with another agency before and they only brought us likes. Now the report shows me exactly how much each ad generated per procedure."',
    test2_n:"Dr. Martínez", test2_c:"Medical Aesthetic Center · Bogotá", test2_r:"From 0 to 25 international patients in 90 days",
    test3_q:'"The best part is that the ad accounts are mine. If I decide to switch agencies tomorrow, I lose nothing. That builds trust from day one."',
    test3_n:"Dr. Vargas", test3_c:"Plastic Surgery Clinic · Bogotá", test3_r:"+60% occupancy in body surgery procedures",
    test_cta:"I want results like these",

    // PLANES
    plan_title:"Plans & pricing",
    plan_sub:"Transparent investment in three parts: management fee, ad spend and technology. Ad spend and technology are separate and always in your name — you see every dollar.",
    p_tag:"Most chosen", p_cta:"I want this plan",
    p1_t:"Essential", p1_for:"Small clinic or first professional management",
    p1_1:"Meta Ads (local patients)", p1_2:"4 new creatives per month", p1_3:"WhatsApp with qualification script", p1_4:"Monthly report + video meeting",
    p2_t:"Performance", p2_for:"Clinic ready to grow seriously",
    p2_1:"Everything in Essential", p2_2:"Google Ads (local search)", p2_3:"6–8 creatives per month", p2_4:"Existing patient reactivation", p2_5:"Bi-weekly report + 2 meetings/month",
    p3_t:"Scale", p3_for:"Multi-location or high volume",
    p3_1:"Everything in Performance", p3_2:"24/7 WhatsApp chatbot + CRM", p3_3:"10–12 creatives per month", p3_4:"Live ROI dashboard", p3_5:"Weekly results meeting",
    p4_t:"Medical Tourism", p4_for:"International patients",
    p4_1:"Everything in Scale", p4_2:"International EN/ES campaigns", p4_3:"Bilingual landing pages per procedure", p4_4:"International patient coordination",
    p4_roi:"One international rhinoplasty patient represents US$3,000–8,000 for your clinic. With just one patient per month, the plan pays for itself.",
    plan_guar:"60-day guarantee: if we don't generate the qualified-lead volume agreed in the audit, the second month of management is free.",

    // PROCESO
    proc_title:"How it works",
    s1_time:"Week 1",
    s1_t:"Free audit", s1_p:"We review your digital presence, competitors and star procedures live. We show you exactly what's leaving patients on the table — in less than 48 hours.",
    s2_time:"Weeks 2–4",
    s2_t:"Strategy & campaigns", s2_p:"We build campaigns in your own ad accounts (Meta + Google). We set up WhatsApp with a qualification script and your ROI reporting. Results meeting included.",
    s3_time:"Month 2 onward",
    s3_t:"Patients & reporting", s3_p:"You receive qualified patients consistently and a clear ROI report per procedure — not per \"like\". You see every dollar invested and what it generated.",

    // GARANTÍA
    gar_title:"Real results guarantee",
    gar_text:"If in 60 days we don't generate the qualified-lead volume agreed, the second month of management is free. No fine print.",

    // FAQ
    faq_title:"Frequently asked questions",
    faq1_q:"What if I already worked with another agency and it didn't work?",
    faq1_a:"That's the most common situation we see. Most generic agencies optimize for \"likes\" or reach, not real patients. Our first session — the free audit — analyzes exactly what failed before and why. We only start if we're confident we can do better. And if in 60 days we don't generate the qualified-lead volume agreed, the second month of management is free.",
    faq2_q:"How long until I see results?",
    faq2_a:"The first qualified leads usually appear between week 2 and week 4, depending on ad budget and procedure. Consistent, scalable results consolidate between month 2 and month 3. That's why our guarantee is 60 days: it's the minimum honest time to judge a campaign.",
    faq3_q:"How do I know the ROI will be positive before paying?",
    faq3_a:"You can't know for certain before starting — no one who is honest would promise that. What we do: in the free audit we estimate the expected cost per lead for your procedure in Bogotá and agree together on a qualified-lead target. If the numbers don't close, we tell you before you pay a cent. And if we start and in 60 days we don't hit the agreed target, the second month of management is free.",
    faq4_q:"Do you understand aesthetic procedures or are you a generic agency?",
    faq4_a:"We only work with aesthetic clinics. We know the difference between open and closed rhinoplasty, between botulinum toxin and fillers, and how each procedure has a different patient decision cycle. That changes the ad copy, the targeting type and the landing page. A generic agency can't do that well.",
    faq5_q:"Do you have experience with medical tourism and international patients?",
    faq5_a:"Yes. Our bilingual (ES/EN) campaigns are specifically designed to attract patients from the US, Canada and Venezuela looking for procedures in Bogotá at competitive prices. We handle content coordination and English landing pages, and we understand the cultural differences in how an international patient makes their decision.",
    faq6_q:"Is there a minimum commitment? Who owns the ad accounts?",
    faq6_a:"There is no minimum commitment. We work month to month because we believe clients should stay for results, not because of a contract. Meta Ads and Google Ads accounts are always yours — we create them in your name or work within the ones you already have. If you decide to leave tomorrow, you take all the history, audiences and accumulated data with you.",
    faq_cta:"Book your free audit",

    // FORMULARIO
    form_title:"Book my free audit",
    form_sub:"20 minutes. No commitment. We show you exactly what to improve — whether you hire us or not.",
    form_nombre_l:"Your name", form_wa_l:"WhatsApp (with country code)", form_proc_l:"Your clinic's main procedure",
    form_proc_ph:"Select a procedure...",
    proc_rino:"Rhinoplasty", proc_botu:"Botulinum toxin / Botox", proc_fill:"Fillers",
    proc_lipo:"Liposuction / Body", proc_impl:"Implants", proc_face:"Facial treatments / Laser",
    proc_odont:"Aesthetic dentistry", proc_otro:"Other",
    form_btn:"Book my free audit",
    form_wa_alt:"Prefer to talk now?", form_wa_link:"Message us on WhatsApp",
    form_micro:"No minimum commitment · No percentage on your ad spend · Your ad accounts are always yours.",
    form_pd:"P.S. The audit is free and we prepare it in less than 48 hours.",
    err_nombre:"Please enter your name.",
    err_wa:"Please enter your WhatsApp with country code.",
    err_proc:"Please select the main procedure.",

    // FOOTER
    foot:"Specialized marketing for aesthetic clinics and medical tourism · Bogotá, Colombia"
  }
};

// ===== MOTOR DE TRADUÇÃO =====
let lang = 'es';

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;

  // Textos simples
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (i18n[l][k] !== undefined) el.textContent = i18n[l][k];
  });

  // Textos com HTML controlado (<em>, <br>) — hero e statements
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (i18n[l][k] !== undefined) el.innerHTML = i18n[l][k];
  });

  // Options do select
  const selectEl = document.getElementById('fProc');
  if (selectEl) {
    selectEl.querySelectorAll('option[data-i18n]').forEach(opt => {
      const k = opt.getAttribute('data-i18n');
      if (i18n[l][k] !== undefined) opt.textContent = i18n[l][k];
    });
  }
  document.getElementById('langToggle').textContent = (l === 'es') ? 'EN' : 'ES';

  // Re-render contadores já animados
  document.querySelectorAll('[data-counter]').forEach(el => {
    if (el.dataset.counterDone) renderCounterFinal(el);
  });

  // Reaplicar marca (alguns textos podem tê-la)
  applyBrand();
}

document.getElementById('langToggle').addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es'));

// ===== NAV — estado "scrolled" =====
(function initNavScroll() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;
  function update() {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

// ===== ACCORDION FAQ =====
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const answer = btn.nextElementSibling;
    document.querySelectorAll('.faq-q').forEach(other => {
      if (other !== btn) {
        other.setAttribute('aria-expanded', 'false');
        const otherAnswer = other.nextElementSibling;
        if (otherAnswer) otherAnswer.hidden = true;
      }
    });
    btn.setAttribute('aria-expanded', String(!expanded));
    if (answer) answer.hidden = expanded;
  });
});

// ===== FORMULÁRIO DE LEAD → WHATSAPP =====
(function initLeadForm() {
  // Link direto do WhatsApp usa o número da BRAND
  const waLink = document.getElementById('waDirectBtn');
  if (waLink) {
    const txt = encodeURIComponent('Hola, quiero mi diagnóstico gratis para mi clínica');
    waLink.href = `https://wa.me/${BRAND.whatsapp}?text=${txt}`;
  }

  const leadForm = document.getElementById('leadForm');
  if (!leadForm) return;

  leadForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre   = document.getElementById('fNombre').value.trim();
    const whatsapp = document.getElementById('fWa').value.trim();
    const proc     = document.getElementById('fProc').value;

    let valid = true;
    ['fNombre','fWa','fProc'].forEach(id => document.getElementById(id).classList.remove('input-error'));
    document.getElementById('err-nombre').textContent = '';
    document.getElementById('err-wa').textContent = '';
    document.getElementById('err-proc').textContent = '';

    if (!nombre) {
      document.getElementById('fNombre').classList.add('input-error');
      document.getElementById('err-nombre').textContent = i18n[lang].err_nombre;
      valid = false;
    }
    const waClean = whatsapp.replace(/[\s\-\(\)]/g, '');
    if (!whatsapp || waClean.replace('+','').length < 8) {
      document.getElementById('fWa').classList.add('input-error');
      document.getElementById('err-wa').textContent = i18n[lang].err_wa;
      valid = false;
    }
    if (!proc) {
      document.getElementById('fProc').classList.add('input-error');
      document.getElementById('err-proc').textContent = i18n[lang].err_proc;
      valid = false;
    }
    if (!valid) return;

    const msgES = `Hola ${BRAND.name}, soy ${nombre}. Mi WhatsApp es ${whatsapp}. El procedimiento principal de mi clínica es: ${proc}. Quiero mi diagnóstico gratis.`;
    const msgEN = `Hello ${BRAND.name}, I'm ${nombre}. My WhatsApp is ${whatsapp}. My clinic's main procedure is: ${proc}. I want my free audit.`;
    const msg = (lang === 'es') ? msgES : msgEN;
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  });
})();

// ===== SCROLL REVEAL =====
(function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.querySelectorAll('.reveal-fade, .reveal-statement').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || '0', 10);
      setTimeout(() => el.classList.add('is-visible'), delay);
      revealObserver.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal-fade').forEach(el => revealObserver.observe(el));

  const statementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      statementObserver.unobserve(entry.target);
    });
  }, { threshold: 0.25, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal-statement').forEach(el => statementObserver.observe(el));
})();

// ===== CONTADORES ANIMADOS =====
function renderCounterFinal(el) {
  const key = el.getAttribute('data-i18n');
  if (key && i18n[lang] && i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
}

function animateCounter(el) {
  const target   = parseFloat(el.dataset.counterVal);
  const prefix   = el.dataset.counterPrefix || '';
  const suffix   = el.dataset.counterSuffix || '';
  const decimals = parseInt(el.dataset.counterDecimals || '0', 10);
  const duration = 1600;
  const startTime = performance.now();
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const current = easeOut(progress) * target;
    el.textContent = prefix + current.toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
    else { el.textContent = prefix + target.toFixed(decimals) + suffix; el.dataset.counterDone = '1'; }
  }
  requestAnimationFrame(tick);
}

(function initCounters() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      if (el.dataset.counterDone) return;
      if (prefersReduced) el.dataset.counterDone = '1';
      else animateCounter(el);
      counterObserver.unobserve(el);
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('[data-counter]').forEach(el => counterObserver.observe(el));
})();

// ===== ANIMAÇÕES CINEMATOGRÁFICAS =====
(function initCinematicAnimations() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth <= 560;
  if (prefersReduced || isMobile) return;

  // 1. Scroll-scale do dashboard (assinatura Apple)
  const dashboard = document.getElementById('heroDashboard');
  if (dashboard) {
    let rafScheduled = false;
    const rotXStart = 6, rotYStart = -4, scaleStart = 0.92;
    const scrollRange = 600;

    function updateDashboardTransform() {
      const progress = Math.min(window.scrollY / scrollRange, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const rotX  = rotXStart * (1 - eased);
      const rotY  = rotYStart * (1 - eased);
      const scale = scaleStart + (1 - scaleStart) * eased;
      dashboard.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`;
      dashboard.style.boxShadow = `
        0 0 0 1px rgba(47,212,196,${0.08 + 0.12 * eased}),
        0 40px 100px rgba(0,0,0,${0.72 - 0.1 * eased}),
        0 0 70px rgba(47,212,196,${0.05 + 0.1 * eased})
      `;
      rafScheduled = false;
    }
    updateDashboardTransform();
    window.addEventListener('scroll', () => {
      if (!rafScheduled) { rafScheduled = true; requestAnimationFrame(updateDashboardTransform); }
    }, { passive: true });
  }

  // 2. Parallax dos orbes
  const orb1 = document.querySelector('.hero-orb-1');
  const orb2 = document.querySelector('.hero-orb-2');
  const orb3 = document.querySelector('.hero-orb-3');
  if (orb1 || orb2 || orb3) {
    let orbRaf = false;
    function updateOrbParallax() {
      const y = window.scrollY;
      if (orb1) orb1.style.transform = `translateY(${y * 0.12}px)`;
      if (orb2) orb2.style.transform = `translateY(${y * -0.08}px)`;
      if (orb3) orb3.style.transform = `translateY(${y * 0.06}px)`;
      orbRaf = false;
    }
    window.addEventListener('scroll', () => {
      if (!orbRaf) { orbRaf = true; requestAnimationFrame(updateOrbParallax); }
    }, { passive: true });
  }
})();
