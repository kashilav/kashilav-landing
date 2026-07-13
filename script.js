// ===================================================
// CONFIGURAÇÃO DA MARCA — ponto único de troca
// Quando o nome definitivo for decidido, altere APENAS
// este bloco (+ <title> e <meta description> no index.html).
// ===================================================
const BRAND = {
  name: 'VECTA',              // nome exibido em todo o site
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
    nav_sistema:"El sistema", nav_servicios:"Servicios", nav_proceso:"Cómo funciona", nav_planes:"Planes", nav_journey:"La experiencia",
    nav_faq:"FAQ", nav_cta:"Diagnóstico gratuito",

    // HERO
    hero_badge:"Sistema de captación de pacientes · Clínicas estéticas · Colombia",
    hero_title:'Pacientes nuevos cada mes, <em>de forma previsible.</em>',
    hero_sub:"Instalamos en tu clínica el Sistema Vecta™: un proceso completo de captación, calificación y agendamiento de pacientes. Tú te concentras en atender. Nosotros llenamos la agenda y te mostramos cuánta facturación generó cada peso invertido.",
    hero_cta1:"Solicitar diagnóstico gratuito",
    hero_cta2:"Conocer el sistema",
    hero_t1:"Captación bilingüe", hero_t2:"por procedimiento", hero_t3:"Precios públicos",
    demo_label:"Demostración del sistema", scroll_cue:"Explora el recorrido",

    // JORNADA INTERACTIVA
    journey_eyebrow:"Una experiencia conectada",
    journey_title:'De una búsqueda a una consulta.<br><em>Sin perder el hilo.</em>',
    journey_sub:"Recorre el sistema. Cada etapa conserva el contexto de la anterior para convertir interés en una oportunidad medible.",
    journey_live:"Recorrido en vivo",
    journey_scene_1:"01 · Descubrimiento", journey_scene_2:"02 · Conversación", journey_scene_3:"03 · Calificación", journey_scene_4:"04 · Agendamiento", journey_scene_5:"05 · Retorno",
    scene_search_query:"mejor clínica de rinoplastia en Bogotá", scene_sponsored:"Patrocinado",
    scene_search_title:"Rinoplastia con evaluación personalizada", scene_search_text:"Conoce opciones, tiempos y agenda una valoración.",
    scene_chat_1:"Hola, quiero saber si soy candidata para una rinoplastia.", scene_chat_2:"Claro. Te haré 3 preguntas para orientarte mejor.",
    scene_profile:"Perfil del paciente", scene_intent:"Intención alta", scene_timing:"Decisión en 30 días", scene_location:"Bogotá",
    scene_calendar:"Agenda clínica", scene_appointment:"Valoración · Rinoplastia",
    scene_result:"Resultado atribuible", scene_demo:"Simulación", scene_revenue:"Facturación asociada al procedimiento",
    journey_1_title:"Aparece cuando la intención ya existe", journey_1_text:"La clínica entra en la conversación en el momento exacto en que alguien busca un procedimiento.",
    journey_2_title:"Responde mientras el interés está caliente", journey_2_text:"Un primer contacto claro y ágil evita que la oportunidad termine en la agenda de otra clínica.",
    journey_3_title:"Separa curiosidad de intención real", journey_3_text:"El sistema organiza contexto, momento de decisión y procedimiento para priorizar cada conversación.",
    journey_4_title:"Convierte la conversación en una cita", journey_4_text:"Seguimiento, recordatorios y una ruta sencilla llevan al paciente hasta una valoración confirmada.",
    journey_5_title:"Conecta cada resultado con su origen", journey_5_text:"La clínica puede entender qué procedimiento, canal y conversación generaron facturación.",

    // STATEMENTS
    stmt1:'Pacientes reales.<br><em>No "me gusta".</em>',
    stmt2:'Crecimiento previsible.<br><em>Mes tras mes.</em>',

    // PROBLEMA
    prob_title:"¿Tu clínica es excelente, pero la agenda no se llena?",
    prob_sub:"Cada semana, cientos de personas buscan en Google e Instagram los procedimientos que tu clínica ofrece. Sin un sistema que capte a esos pacientes, los califique y los lleve hasta la consulta, terminan agendando en otra parte. El boca a boca es valioso, pero no es previsible.",

    // EYEBROWS
    eyebrow_sys:"El método", eyebrow_proc:"El proceso", eyebrow_roi:"Retorno",
    eyebrow_pq:"Fit", eyebrow_aut:"El mercado",
    eyebrow_planes:"Planes", eyebrow_faq:"Dudas",

    // SISTEMA VECTA (bento)
    sys_title:"Sistema Vecta™: así generamos pacientes",
    sys_sub:"No vendemos anuncios sueltos. Instalamos un proceso completo que convierte búsquedas en consultas agendadas. Estas son sus cuatro piezas:",
    sys1_t:"1 · Captación", sys1_p:"Atraemos a las personas que ya buscan tu procedimiento en tu ciudad, con mensajes que hablan el idioma de tus pacientes y de tu especialidad.",
    sys2_t:"2 · Calificación", sys2_p:"Filtramos a los curiosos y priorizamos a quienes tienen intención real de agendar, con guiones de conversación diseñados para el sector estético.",
    sys2_pill:"Intención real",
    sys3_t:"3 · Agendamiento", sys3_p:"Respondemos rápido y llevamos cada conversación hasta una consulta confirmada en tu calendario. Cada hora de espera le regala pacientes a tu competencia.",
    sys4_t:"4 · Medición y escala", sys4_p:"Cada mes sabes cuántos pacientes entraron, cuánto costó cada uno y cuánta facturación generó cada procedimiento. Con esos números validados, subimos la inversión en lo que funciona y cortamos lo que no.",
    chip_pac:"Pacientes", chip_costo:"Costo por paciente", chip_fact:"Facturación",

    // SERVICIOS — hub
    eyebrow_serv:"Servicios",
    serv_title:"Todo lo que el sistema instala en tu clínica",
    serv_sub:"Seis frentes de trabajo, un solo objetivo: más pacientes en tu agenda.",
    serv1_l:"Anuncios de captación",
    serv2_l:"Creativos y contenido",
    serv3_l:"WhatsApp y agendamiento",
    serv4_l:"CRM y seguimiento",
    serv5_l:"Reporte de facturación",
    serv6_l:"Turismo médico",

    // PROCESO — 7 pasos
    proc_title:"Cómo funciona, paso a paso",
    proc_sub:"Del primer análisis a la escala. Sin misterio y sin letra pequeña.",
    f1_t:"Diagnóstico", f1_p:"Analizamos tu clínica, tu competencia y tu procedimiento estrella. Gratis y en menos de 48 horas.",
    f2_t:"Plan de captación", f2_p:"Definimos juntos la meta de pacientes, el presupuesto y el procedimiento que vamos a empujar primero.",
    f3_t:"Captación", f3_p:"Activamos los canales donde tus pacientes ya buscan. Las cuentas quedan siempre a tu nombre.",
    f4_t:"Calificación", f4_p:"Filtramos a los curiosos y priorizamos a quienes tienen intención real de agendar una consulta.",
    f5_t:"Agendamiento", f5_p:"Llevamos cada conversación hasta una consulta confirmada en tu calendario, con seguimiento y recordatorios.",
    f6_t:"Conversión", f6_p:"Te apoyamos con guiones y seguimiento para que más consultas terminen en procedimientos realizados.",
    f7_t:"Escala", f7_p:"Con el costo por paciente validado, aumentamos la inversión y repetimos lo que ya demostró funcionar.",

    // ROI
    roi_title:"Piensa en retorno, no en costo",
    roi_sub:"Mueve los controles y construye un escenario con los números de tu clínica.",
    roi_ticket:"Ticket promedio", roi_patients:"Pacientes adicionales al mes", roi_investment:"Inversión mensual total",
    roi_scenario:"Escenario estimado", roi_revenue_label:"Facturación adicional", roi_per_month:"por mes",
    roi_return_label:"Retorno sobre inversión", roi_balance_label:"Diferencia estimada",
    roi_disclaimer:"Simulación educativa. No representa una promesa de resultados.",
    roi_r1_l:"Ticket promedio de un procedimiento",
    roi_r2_l:"Pacientes adicionales por mes (meta inicial)",
    roi_r3_l:"Ingreso adicional por mes",
    roi_r4_l:"Inversión en el plan Esencial",
    roi_r5_l:"Retorno sobre el honorario",
    roi_note:"Es un ejemplo ilustrativo, no una promesa. En el diagnóstico gratuito hacemos este cálculo con tu ticket real y tu procedimiento estrella. Si las cuentas no cierran para tu clínica, te lo decimos antes de empezar.",
    roi_cta:"Evaluar el potencial de mi clínica",

    // PARA QUIÉN
    pq_title:"¿Es para tu clínica?",
    pq_yes_t:"Es para ti si...",
    pq_yes_1:"Tu clínica ya está activa y tiene procedimientos consolidados",
    pq_yes_2:"Quieres un flujo constante de pacientes nuevos, no depender solo del boca a boca",
    pq_yes_3:"Puedes invertir un presupuesto mínimo de pauta (~US$500/mes, aparte del honorario)",
    pq_yes_4:"Quieres atraer pacientes internacionales de alto ticket",
    pq_yes_5:"Valoras reportes claros de facturación por procedimiento, no métricas de vanidad",
    pq_no_t:"No es para ti si...",
    pq_no_1:"Acabas de abrir y aún no tienes procedimientos definidos ni equipo médico",
    pq_no_2:"No tienes presupuesto para pauta publicitaria. Los anuncios son el combustible del sistema",
    pq_no_3:"Buscas una agencia genérica que haga de todo para todos los sectores",
    pq_no_4:"Esperas resultados sin una inversión sostenida mínima de 60 días",

    // AUTORIDAD — el mercado
    aut_title:"Por qué la mayoría de las clínicas pierde pacientes",
    met1_l:"de las búsquedas en Colombia pasan por Google",
    met2_l:"pacientes internacionales llegaron a Colombia en 2025",
    met3_l:"de colombianos están conectados a internet",
    err1_t:"Responder tarde",
    err1_p:"Un paciente que pregunta por WhatsApp y espera horas ya le escribió a otras dos clínicas. La velocidad de respuesta define quién se queda con el paciente. Por eso el agendamiento es una pieza central del sistema, no un detalle.",
    err2_t:"Medir aplausos, no ingresos",
    err2_p:'Seguidores y "me gusta" no pagan la nómina. Si el reporte que recibes no muestra pacientes, procedimientos y facturación, no estás midiendo lo que importa. Nuestro reporte responde una sola pregunta: cuánto dinero generó cada peso invertido.',
    err3_t:"Depender del boca a boca",
    err3_p:"Es la mejor fuente de pacientes y también la menos controlable. Una clínica que quiere crecer necesita un canal propio que pueda encender, medir y escalar a voluntad. Eso es exactamente lo que el sistema construye.",
    aut_cta:"Descubrir dónde pierde pacientes mi clínica",

    // PLANES
    plan_title:"Planes y precios",
    plan_sub:"Precios públicos, sin sorpresas. La inversión se divide en tres partes claras: honorario de gestión, pauta publicitaria y tecnología. La pauta y la tecnología van aparte y siempre a tu nombre. Tú ves cada peso.",
    p_tag:"Más elegido", p_cta:"Empezar con el diagnóstico",
    p1_t:"Esencial", p1_for:"Para dar el primer paso hacia una captación profesional",
    p1_1:"Captación de pacientes locales", p1_2:"4 anuncios nuevos al mes", p1_3:"Guion de calificación para tu WhatsApp", p1_4:"Reporte mensual de resultados + reunión",
    p2_t:"Performance", p2_for:"Para llenar la agenda con constancia",
    p2_1:"Todo lo del plan Esencial", p2_2:"Captación en búsquedas de Google", p2_3:"6 a 8 anuncios al mes", p2_4:"Reactivación de tus pacientes existentes", p2_5:"Reporte quincenal + 2 reuniones al mes",
    p3_t:"Escala", p3_for:"Para clínicas multi-sede o de alto volumen",
    p3_1:"Todo lo del plan Performance", p3_2:"Atención automática 24/7 en tu WhatsApp", p3_3:"10 a 12 anuncios al mes", p3_4:"Panel de facturación en vivo", p3_5:"Reunión semanal de resultados",
    p4_tag:"Oferta premium",
    p4_t:"Turismo Médico", p4_for:"Pacientes internacionales de alto ticket",
    p4_1:"Todo lo del plan Escala", p4_2:"Captación internacional en inglés y español", p4_3:"Páginas por procedimiento en dos idiomas", p4_4:"Seguimiento multilingüe por WhatsApp", p4_5:"Acompañamiento del paciente desde el primer contacto hasta el día del procedimiento",
    p4_roi:"Un paciente internacional de rinoplastia representa entre US$3.000 y US$8.000 para tu clínica. Con un solo paciente al mes, el plan se paga solo.",
    p4_cta:"Evaluar mi potencial internacional",
    plan_scarcity:"Trabajamos con un número limitado de clínicas por ciudad y por especialidad. No captamos pacientes para dos competidores directos al mismo tiempo. La disponibilidad de tu ciudad se confirma en el diagnóstico.",
    plan_guar:"Garantía de 60 días: si no alcanzamos el volumen de pacientes potenciales acordado en el diagnóstico, el segundo mes de gestión es gratis.",

    // GARANTÍA
    gar_title:"Garantía de resultado real",
    gar_text:"Si en 60 días no alcanzamos el volumen de pacientes potenciales acordado, el segundo mes de gestión es gratis. Sin letras pequeñas.",

    // FAQ
    faq_title:"Preguntas frecuentes",
    faq1_q:"¿Qué pasa si ya trabajé con otra agencia y no funcionó?",
    faq1_a:'Es la situación más común que escuchamos. La mayoría de las agencias optimiza por alcance o "me gusta", no por pacientes. Nuestra primera sesión, el diagnóstico gratuito, analiza exactamente qué falló antes y por qué. Solo arrancamos si tenemos claridad de que podemos hacerlo mejor. Y si en 60 días no alcanzamos la meta acordada, el segundo mes de gestión es gratis.',
    faq2_q:"¿En cuánto tiempo veo resultados?",
    faq2_a:"Los primeros pacientes potenciales suelen aparecer entre la semana 2 y la semana 4, dependiendo del presupuesto de pauta y del procedimiento. Resultados consistentes y escalables se consolidan entre el mes 2 y el mes 3. Por eso nuestra garantía es de 60 días: es el tiempo mínimo honesto para juzgar un sistema de captación.",
    faq3_q:"¿Necesito invertir en anuncios aparte del honorario?",
    faq3_a:"Sí. La pauta publicitaria es el combustible del sistema y va aparte del honorario de gestión. Recomendamos un mínimo de US$500 al mes para arrancar. Ese dinero nunca pasa por nosotros: la cuenta publicitaria es tuya, el pago va directo a la plataforma y tú ves cada peso invertido.",
    faq4_q:"¿Cómo sé que el retorno será positivo antes de pagar?",
    faq4_a:"No puedes saberlo con certeza antes de arrancar. Nadie honesto te prometería eso. Lo que sí hacemos: en el diagnóstico gratuito estimamos el costo por paciente esperado para tu procedimiento y tu ciudad, y acordamos juntos una meta. Si los números no cierran, te lo decimos antes de que pagues un peso. Y si arrancamos y en 60 días no alcanzamos la meta acordada, el segundo mes de gestión es gratis.",
    faq5_q:"¿Entienden los procedimientos estéticos o son una agencia genérica?",
    faq5_a:"Trabajamos únicamente con clínicas estéticas, odontológicas y de medicina estética. Conocemos la diferencia entre rinoplastia abierta y cerrada, entre toxina botulínica y fillers, y cómo cada procedimiento tiene un ciclo de decisión distinto en el paciente. Eso cambia el mensaje, la segmentación y la página de destino. Una agencia genérica no puede hacer eso bien.",
    faq6_q:"¿Trabajan solo con Bogotá?",
    faq6_a:"Hoy trabajamos con clínicas en Bogotá, Medellín y Cali. La operación es 100% remota, así que la ciudad no limita la calidad del servicio. Lo que sí limita es nuestra política de exclusividad: aceptamos un número limitado de clínicas por ciudad y por especialidad, para no captar pacientes para dos competidores directos a la vez.",
    faq7_q:"¿Puedo contratar solo una parte del servicio?",
    faq7_a:"El sistema funciona como un proceso completo: captar sin calificar llena tu WhatsApp de curiosos, y calificar sin agendar deja pacientes a mitad de camino. Por eso no vendemos piezas sueltas. Lo que sí existe son planes por etapa de crecimiento: el plan Esencial es la puerta de entrada con la versión más compacta del sistema.",
    faq8_q:"¿Tienen experiencia con turismo médico y pacientes internacionales?",
    faq8_a:"Es nuestra oferta premium. La captación internacional funciona distinto: el paciente investiga más, compara países y necesita confianza antes de viajar. Por eso el plan Turismo Médico incluye captación en inglés y español, páginas por procedimiento en dos idiomas, seguimiento multilingüe por WhatsApp y acompañamiento del paciente desde el primer contacto hasta el día del procedimiento.",
    faq9_q:"¿Hay permanencia mínima? ¿De quién son las cuentas publicitarias?",
    faq9_a:"No hay permanencia mínima. Trabajamos mes a mes porque el cliente debe quedarse por resultados, no por contrato. Las cuentas publicitarias son siempre tuyas: las creamos a tu nombre o trabajamos en las que ya tienes. Si decides salir mañana, te llevas el histórico, los públicos y todos los datos acumulados.",
    faq10_q:"¿Qué diferencia a Vecta de otras agencias?",
    faq10_a:"Cuatro cosas. Uno: trabajamos únicamente con clínicas estéticas, no con cualquier negocio. Dos: instalamos un sistema completo de captación, calificación y agendamiento, no anuncios sueltos. Tres: medimos en pacientes y facturación por procedimiento, no en seguidores. Cuatro: limitamos el número de clínicas por ciudad y especialidad, y respaldamos el trabajo con una garantía real de 60 días.",
    faq_cta:"Recibir un análisis estratégico",

    // FORMULARIO
    form_title:"Solicita tu diagnóstico gratuito",
    form_sub:"20 minutos, sin compromiso. Te mostramos dónde está el potencial de captación de tu clínica y qué haríamos con él. Te sirve aunque decidas no trabajar con nosotros.",
    form_nombre_l:"Tu nombre", form_wa_l:"WhatsApp (con código de país)", form_proc_l:"Procedimiento principal de tu clínica",
    form_proc_ph:"Selecciona un procedimiento...",
    proc_rino:"Rinoplastia", proc_botu:"Toxina botulínica / Botox", proc_fill:"Rellenos / Fillers",
    proc_lipo:"Liposucción / Corporal", proc_impl:"Implantes", proc_face:"Tratamientos faciales / Láser",
    proc_odont:"Odontología estética", proc_capilar:"Trasplante capilar", proc_otro:"Otro",
    form_btn:"Solicitar diagnóstico gratuito",
    form_wa_alt:"¿Prefieres hablar ahora?", form_wa_link:"Escríbenos por WhatsApp",
    form_micro:"Sin permanencia mínima · Sin porcentaje sobre tu pauta · Tus cuentas publicitarias son siempre tuyas.",
    form_pd:"P.D. El diagnóstico es gratuito y lo preparamos en menos de 48 horas.",
    err_nombre:"Por favor ingresa tu nombre.",
    err_wa:"Por favor ingresa tu WhatsApp con código de país.",
    err_proc:"Por favor selecciona el procedimiento principal.",

    // FOOTER
    foot:"Sistema de crecimiento para clínicas estéticas y turismo médico · Bogotá · Medellín · Cali"
  },

  en: {
    // NAV
    nav_sistema:"The system", nav_servicios:"Services", nav_proceso:"How it works", nav_planes:"Plans", nav_journey:"The experience",
    nav_faq:"FAQ", nav_cta:"Free growth audit",

    // HERO
    hero_badge:"Patient acquisition system · Aesthetic clinics · Colombia",
    hero_title:'New patients every month, <em>predictably.</em>',
    hero_sub:"We install the Vecta System™ in your clinic: a complete process for attracting, qualifying and booking patients. You focus on treating them. We fill the calendar and show you how much revenue every dollar generated.",
    hero_cta1:"Request your free growth audit",
    hero_cta2:"See how the system works",
    hero_t1:"Bilingual acquisition", hero_t2:"per procedure", hero_t3:"Public pricing",
    demo_label:"System demonstration", scroll_cue:"Explore the journey",

    // INTERACTIVE JOURNEY
    journey_eyebrow:"One connected experience",
    journey_title:'From a search to a consultation.<br><em>Without losing context.</em>',
    journey_sub:"Explore the system. Each stage keeps the context from the previous one to turn interest into a measurable opportunity.",
    journey_live:"Live journey",
    journey_scene_1:"01 · Discovery", journey_scene_2:"02 · Conversation", journey_scene_3:"03 · Qualification", journey_scene_4:"04 · Booking", journey_scene_5:"05 · Return",
    scene_search_query:"best rhinoplasty clinic in Bogotá", scene_sponsored:"Sponsored",
    scene_search_title:"Rhinoplasty with a personalized evaluation", scene_search_text:"Explore options, timing and book an evaluation.",
    scene_chat_1:"Hi, I'd like to know if I'm a candidate for rhinoplasty.", scene_chat_2:"Of course. I'll ask you 3 questions to guide you better.",
    scene_profile:"Patient profile", scene_intent:"High intent", scene_timing:"Decision within 30 days", scene_location:"Bogotá",
    scene_calendar:"Clinic calendar", scene_appointment:"Evaluation · Rhinoplasty",
    scene_result:"Attributable result", scene_demo:"Simulation", scene_revenue:"Revenue associated with the procedure",
    journey_1_title:"Show up when intent already exists", journey_1_text:"The clinic joins the conversation at the exact moment someone searches for a procedure.",
    journey_2_title:"Respond while interest is still warm", journey_2_text:"A clear, fast first contact keeps the opportunity from ending up in another clinic's calendar.",
    journey_3_title:"Separate curiosity from real intent", journey_3_text:"The system organizes context, decision timing and procedure to prioritize each conversation.",
    journey_4_title:"Turn the conversation into an appointment", journey_4_text:"Follow-up, reminders and a simple journey guide the patient to a confirmed evaluation.",
    journey_5_title:"Connect every result to its origin", journey_5_text:"The clinic can understand which procedure, channel and conversation generated revenue.",

    // STATEMENTS
    stmt1:'Real patients.<br><em>Not "likes".</em>',
    stmt2:'Predictable growth.<br><em>Month after month.</em>',

    // PROBLEMA
    prob_title:"Great clinic, but the calendar won't fill up?",
    prob_sub:"Every week, hundreds of people search Google and Instagram for the procedures your clinic offers. Without a system that captures those patients, qualifies them and walks them to the consultation, they end up booking somewhere else. Word of mouth is valuable, but it is not predictable.",

    // EYEBROWS
    eyebrow_sys:"The method", eyebrow_proc:"The process", eyebrow_roi:"Return",
    eyebrow_pq:"Fit", eyebrow_aut:"The market",
    eyebrow_planes:"Plans", eyebrow_faq:"Questions",

    // SISTEMA VECTA
    sys_title:"The Vecta System™: how we generate patients",
    sys_sub:"We don't sell loose ads. We install a complete process that turns searches into booked consultations. These are its four pieces:",
    sys1_t:"1 · Attraction", sys1_p:"We reach the people already searching for your procedure in your city, with messages that speak the language of your patients and your specialty.",
    sys2_t:"2 · Qualification", sys2_p:"We filter out the curious and prioritize people with real intent to book, using conversation scripts built for the aesthetic sector.",
    sys2_pill:"Real intent",
    sys3_t:"3 · Booking", sys3_p:"We respond fast and walk every conversation to a confirmed consultation in your calendar. Every hour of silence hands patients to your competitors.",
    sys4_t:"4 · Measurement and scale", sys4_p:"Every month you know how many patients came in, what each one cost and how much revenue each procedure generated. With those numbers validated, we increase investment in what works and cut what doesn't.",
    chip_pac:"Patients", chip_costo:"Cost per patient", chip_fact:"Revenue",

    // SERVICIOS — hub
    eyebrow_serv:"Services",
    serv_title:"Everything the system installs in your clinic",
    serv_sub:"Six work fronts, one goal: more patients in your calendar.",
    serv1_l:"Patient acquisition ads",
    serv2_l:"Creatives and content",
    serv3_l:"WhatsApp and booking",
    serv4_l:"CRM and follow-up",
    serv5_l:"Revenue reporting",
    serv6_l:"Medical tourism",

    // PROCESO
    proc_title:"How it works, step by step",
    proc_sub:"From the first analysis to scale. No mystery and no fine print.",
    f1_t:"Audit", f1_p:"We analyze your clinic, your competitors and your star procedure. Free and in less than 48 hours.",
    f2_t:"Acquisition plan", f2_p:"Together we define the patient target, the budget and the procedure we will push first.",
    f3_t:"Attraction", f3_p:"We activate the channels where your patients already search. The accounts always stay in your name.",
    f4_t:"Qualification", f4_p:"We filter out the curious and prioritize people with real intent to book a consultation.",
    f5_t:"Booking", f5_p:"We walk every conversation to a confirmed consultation in your calendar, with follow-up and reminders.",
    f6_t:"Conversion", f6_p:"We support you with scripts and follow-up so more consultations end in performed procedures.",
    f7_t:"Scale", f7_p:"With the cost per patient validated, we increase investment and repeat what has already proven to work.",

    // ROI
    roi_title:"Think return, not cost",
    roi_sub:"Move the controls and build a scenario with your clinic's numbers.",
    roi_ticket:"Average ticket", roi_patients:"Additional patients per month", roi_investment:"Total monthly investment",
    roi_scenario:"Estimated scenario", roi_revenue_label:"Additional revenue", roi_per_month:"per month",
    roi_return_label:"Return on investment", roi_balance_label:"Estimated difference",
    roi_disclaimer:"Educational simulation. This is not a promise of results.",
    roi_r1_l:"Average ticket of one procedure",
    roi_r2_l:"Additional patients per month (initial target)",
    roi_r3_l:"Additional revenue per month",
    roi_r4_l:"Investment in the Essential plan",
    roi_r5_l:"Return on the management fee",
    roi_note:"This is an illustrative example, not a promise. In the free audit we run this math with your real ticket and your star procedure. If the numbers don't work for your clinic, we tell you before you start.",
    roi_cta:"Evaluate my clinic's potential",

    // PARA QUIÉN
    pq_title:"Is it right for your clinic?",
    pq_yes_t:"It's for you if...",
    pq_yes_1:"Your clinic is already active and has established procedures",
    pq_yes_2:"You want a steady flow of new patients, not to depend only on word of mouth",
    pq_yes_3:"You can invest a minimum ad budget (~US$500/month, separate from the fee)",
    pq_yes_4:"You want to attract high-ticket international patients",
    pq_yes_5:"You value clear revenue reports per procedure, not vanity metrics",
    pq_no_t:"It's not for you if...",
    pq_no_1:"You just opened and don't yet have defined procedures or a medical team",
    pq_no_2:"You have no budget for paid media. Ads are the fuel of the system",
    pq_no_3:"You're looking for a generic agency that does everything for everyone",
    pq_no_4:"You expect results without a sustained minimum investment of 60 days",

    // AUTORIDAD
    aut_title:"Why most clinics lose patients",
    met1_l:"of searches in Colombia go through Google",
    met2_l:"international patients arrived in Colombia in 2025",
    met3_l:"Colombians are connected to the internet",
    err1_t:"Replying late",
    err1_p:"A patient who asks on WhatsApp and waits for hours has already messaged two other clinics. Response speed decides who keeps the patient. That's why booking is a core piece of the system, not a detail.",
    err2_t:"Measuring applause, not income",
    err2_p:'Followers and "likes" don\'t pay payroll. If the report you receive doesn\'t show patients, procedures and revenue, you are not measuring what matters. Our report answers one question: how much money every dollar generated.',
    err3_t:"Depending on word of mouth",
    err3_p:"It's the best source of patients and also the least controllable. A clinic that wants to grow needs its own channel it can turn on, measure and scale at will. That is exactly what the system builds.",
    aut_cta:"Find out where my clinic loses patients",

    // PLANES
    plan_title:"Plans & pricing",
    plan_sub:"Public pricing, no surprises. The investment splits into three clear parts: management fee, ad spend and technology. Ad spend and technology are separate and always in your name. You see every dollar.",
    p_tag:"Most chosen", p_cta:"Start with the audit",
    p1_t:"Essential", p1_for:"Your first step into professional patient acquisition",
    p1_1:"Local patient acquisition", p1_2:"4 new ads per month", p1_3:"Qualification script for your WhatsApp", p1_4:"Monthly results report + meeting",
    p2_t:"Performance", p2_for:"To fill the calendar consistently",
    p2_1:"Everything in Essential", p2_2:"Acquisition on Google searches", p2_3:"6 to 8 ads per month", p2_4:"Reactivation of your existing patients", p2_5:"Bi-weekly report + 2 meetings per month",
    p3_t:"Scale", p3_for:"For multi-location or high-volume clinics",
    p3_1:"Everything in Performance", p3_2:"24/7 automatic replies on your WhatsApp", p3_3:"10 to 12 ads per month", p3_4:"Live revenue dashboard", p3_5:"Weekly results meeting",
    p4_tag:"Premium offer",
    p4_t:"Medical Tourism", p4_for:"High-ticket international patients",
    p4_1:"Everything in Scale", p4_2:"International acquisition in English and Spanish", p4_3:"Per-procedure pages in two languages", p4_4:"Multilingual WhatsApp follow-up", p4_5:"Patient guidance from first contact to procedure day",
    p4_roi:"One international rhinoplasty patient represents US$3,000 to US$8,000 for your clinic. With just one patient per month, the plan pays for itself.",
    p4_cta:"Evaluate my international potential",
    plan_scarcity:"We work with a limited number of clinics per city and per specialty. We never acquire patients for two direct competitors at the same time. Availability for your city is confirmed in the audit.",
    plan_guar:"60-day guarantee: if we don't reach the volume of potential patients agreed in the audit, the second month of management is free.",

    // GARANTÍA
    gar_title:"Real results guarantee",
    gar_text:"If in 60 days we don't reach the agreed volume of potential patients, the second month of management is free. No fine print.",

    // FAQ
    faq_title:"Frequently asked questions",
    faq1_q:"What if I already worked with another agency and it didn't work?",
    faq1_a:'It\'s the most common situation we hear. Most agencies optimize for reach or "likes", not patients. Our first session, the free audit, analyzes exactly what failed before and why. We only start if we are confident we can do better. And if in 60 days we don\'t reach the agreed target, the second month of management is free.',
    faq2_q:"How long until I see results?",
    faq2_a:"The first potential patients usually appear between week 2 and week 4, depending on ad budget and procedure. Consistent, scalable results consolidate between month 2 and month 3. That's why our guarantee is 60 days: it's the minimum honest time to judge an acquisition system.",
    faq3_q:"Do I need to invest in ads on top of the fee?",
    faq3_a:"Yes. Paid media is the fuel of the system and is separate from the management fee. We recommend a minimum of US$500 per month to start. That money never passes through us: the ad account is yours, payment goes directly to the platform and you see every dollar invested.",
    faq4_q:"How do I know the return will be positive before paying?",
    faq4_a:"You can't know for certain before starting. No honest person would promise that. What we do: in the free audit we estimate the expected cost per patient for your procedure and your city, and we agree on a target together. If the numbers don't work, we tell you before you pay a cent. And if we start and don't reach the agreed target in 60 days, the second month of management is free.",
    faq5_q:"Do you understand aesthetic procedures or are you a generic agency?",
    faq5_a:"We work only with aesthetic, dental and aesthetic-medicine clinics. We know the difference between open and closed rhinoplasty, between botulinum toxin and fillers, and how each procedure has a different decision cycle. That changes the message, the targeting and the landing page. A generic agency can't do that well.",
    faq6_q:"Do you only work with Bogotá?",
    faq6_a:"Today we work with clinics in Bogotá, Medellín and Cali. The operation is 100% remote, so the city doesn't limit service quality. What does limit is our exclusivity policy: we accept a limited number of clinics per city and specialty, so we never acquire patients for two direct competitors at once.",
    faq7_q:"Can I hire only part of the service?",
    faq7_a:"The system works as a complete process: attracting without qualifying fills your WhatsApp with curious people, and qualifying without booking leaves patients halfway. That's why we don't sell loose pieces. What does exist are plans by growth stage: the Essential plan is the entry point with the most compact version of the system.",
    faq8_q:"Do you have experience with medical tourism and international patients?",
    faq8_a:"It's our premium offer. International acquisition works differently: the patient researches more, compares countries and needs trust before traveling. That's why the Medical Tourism plan includes acquisition in English and Spanish, per-procedure pages in two languages, multilingual WhatsApp follow-up and patient guidance from first contact to procedure day.",
    faq9_q:"Is there a minimum commitment? Who owns the ad accounts?",
    faq9_a:"There is no minimum commitment. We work month to month because clients should stay for results, not because of a contract. The ad accounts are always yours: we create them in your name or work within the ones you already have. If you decide to leave tomorrow, you take the history, the audiences and all the accumulated data.",
    faq10_q:"What makes Vecta different from other agencies?",
    faq10_a:"Four things. One: we work only with aesthetic clinics, not with any business. Two: we install a complete system for attracting, qualifying and booking patients, not loose ads. Three: we measure in patients and revenue per procedure, not followers. Four: we limit the number of clinics per city and specialty, and we back the work with a real 60-day guarantee.",
    faq_cta:"Get a strategic analysis",

    // FORMULARIO
    form_title:"Request your free growth audit",
    form_sub:"20 minutes, no commitment. We show you where your clinic's acquisition potential is and what we would do with it. Useful even if you decide not to work with us.",
    form_nombre_l:"Your name", form_wa_l:"WhatsApp (with country code)", form_proc_l:"Your clinic's main procedure",
    form_proc_ph:"Select a procedure...",
    proc_rino:"Rhinoplasty", proc_botu:"Botulinum toxin / Botox", proc_fill:"Fillers",
    proc_lipo:"Liposuction / Body", proc_impl:"Implants", proc_face:"Facial treatments / Laser",
    proc_odont:"Aesthetic dentistry", proc_capilar:"Hair transplant", proc_otro:"Other",
    form_btn:"Request my free growth audit",
    form_wa_alt:"Prefer to talk now?", form_wa_link:"Message us on WhatsApp",
    form_micro:"No minimum commitment · No percentage on your ad spend · Your ad accounts are always yours.",
    form_pd:"P.S. The audit is free and we prepare it in less than 48 hours.",
    err_nombre:"Please enter your name.",
    err_wa:"Please enter your WhatsApp with country code.",
    err_proc:"Please select the main procedure.",

    // FOOTER
    foot:"Growth system for aesthetic clinics and medical tourism · Bogotá · Medellín · Cali"
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

  // Atualizar o rótulo da cena que estiver ativa
  const visual = document.getElementById('journeyVisual');
  const sceneLabel = document.getElementById('journeySceneLabel');
  if (visual && sceneLabel) {
    const scene = visual.dataset.scene || '1';
    sceneLabel.textContent = i18n[l][`journey_scene_${scene}`] || '';
  }

  // Reformatar valores da calculadora para o idioma ativo
  const roiTicket = document.getElementById('roiTicket');
  if (roiTicket) roiTicket.dispatchEvent(new Event('input'));
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

// ===== NAVEGAÇÃO MOBILE =====
(function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggle || !menu) return;

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    menu.hidden = true;
  }

  toggle.addEventListener('click', () => {
    const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(willOpen));
    toggle.setAttribute('aria-label', willOpen ? 'Cerrar menú' : 'Abrir menú');
    menu.hidden = !willOpen;
  });

  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) closeMenu(); }, { passive: true });
})();

// ===== JORNADA INTERATIVA CONTROLADA PELO SCROLL =====
(function initJourney() {
  const visual = document.getElementById('journeyVisual');
  const progress = document.getElementById('journeyProgress');
  const label = document.getElementById('journeySceneLabel');
  const steps = [...document.querySelectorAll('[data-journey-step]')];
  if (!visual || !steps.length) return;

  function setScene(scene) {
    const next = String(scene);
    if (visual.dataset.scene === next) return;
    visual.dataset.scene = next;
    steps.forEach(step => step.classList.toggle('is-active', step.dataset.journeyStep === next));
    if (progress) progress.style.width = `${Number(next) * 20}%`;
    if (label) label.textContent = i18n[lang][`journey_scene_${next}`] || '';
  }

  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setScene(visible.target.dataset.journeyStep);
  }, { threshold: [0.2, 0.45, 0.7], rootMargin: '-18% 0px -28% 0px' });

  steps.forEach(step => observer.observe(step));
  setScene('1');
})();

// ===== CALCULADORA DE RETORNO =====
(function initRoiCalculator() {
  const ticket = document.getElementById('roiTicket');
  const patients = document.getElementById('roiPatients');
  const investment = document.getElementById('roiInvestment');
  if (!ticket || !patients || !investment) return;

  const ticketOut = document.getElementById('roiTicketOut');
  const patientsOut = document.getElementById('roiPatientsOut');
  const investmentOut = document.getElementById('roiInvestmentOut');
  const revenueOut = document.getElementById('roiRevenueOut');
  const returnOut = document.getElementById('roiReturnOut');
  const balanceOut = document.getElementById('roiBalanceOut');

  function money(value) {
    return new Intl.NumberFormat(lang === 'es' ? 'es-CO' : 'en-US', {
      style: 'currency', currency: 'USD', maximumFractionDigits: 0
    }).format(value);
  }

  function paintRange(input) {
    const progress = ((Number(input.value) - Number(input.min)) / (Number(input.max) - Number(input.min))) * 100;
    input.style.setProperty('--range-progress', `${progress}%`);
  }

  function update() {
    const ticketValue = Number(ticket.value);
    const patientValue = Number(patients.value);
    const investmentValue = Number(investment.value);
    const revenue = ticketValue * patientValue;
    const roi = revenue / investmentValue;
    const balance = revenue - investmentValue;

    ticketOut.textContent = money(ticketValue);
    patientsOut.textContent = String(patientValue);
    investmentOut.textContent = money(investmentValue);
    revenueOut.textContent = money(revenue);
    returnOut.textContent = `${roi.toFixed(1)}x`;
    balanceOut.textContent = money(balance);
    balanceOut.style.color = balance >= 0 ? 'var(--primary)' : '#ff8e8e';
    [ticket, patients, investment].forEach(paintRange);
  }

  [ticket, patients, investment].forEach(input => input.addEventListener('input', update));
  update();
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
    const txt = encodeURIComponent('Hola, quiero solicitar el diagnóstico gratuito para mi clínica');
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

    const msgES = `Hola ${BRAND.name}, soy ${nombre}. Mi WhatsApp es ${whatsapp}. El procedimiento principal de mi clínica es: ${proc}. Quiero solicitar el diagnóstico gratuito.`;
    const msgEN = `Hello ${BRAND.name}, I'm ${nombre}. My WhatsApp is ${whatsapp}. My clinic's main procedure is: ${proc}. I want to request the free growth audit.`;
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

// ===== HUB DE SERVIÇOS — CUBOS SAINDO DO CENTRO =====
(function initServicesHubMotion() {
  const hub = document.querySelector('.hub-graphic');
  if (!hub) return;

  const stage = hub.closest('.hub-scroll-stage');
  const center = hub.querySelector('.hub-center');
  const circles = hub.querySelector('.hub-circles');
  const nodes = [...hub.querySelectorAll('.hub-node')];
  const paths = [...hub.querySelectorAll('.hub-line')];
  if (!center || !nodes.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const desktop = window.matchMedia('(min-width: 901px)');
  const groups = [0, 0, 1, 1, 2, 2];
  const curves = [
    [-13, -12], [0, 0], [-13, 12],
    [13, -12], [0, 0], [13, 12]
  ];
  let metrics = [];
  let rafPending = false;

  const clamp = value => Math.min(1, Math.max(0, value));
  const easeOutBack = value => {
    const amount = 1.08;
    const shifted = value - 1;
    return 1 + (amount + 1) * shifted ** 3 + amount * shifted ** 2;
  };

  nodes.forEach((node, index) => node.style.setProperty('--hub-i', index));
  hub.classList.add('hub-motion-ready');

  function clearInlineMotion() {
    nodes.forEach(node => {
      const icon = node.querySelector('.hub-node-icon');
      const label = node.querySelector('.hub-node-label');
      if (icon) {
        icon.style.transform = '';
        icon.style.opacity = '';
        icon.style.filter = '';
      }
      if (label) {
        label.style.transform = '';
        label.style.opacity = '';
        label.style.filter = '';
      }
      node.classList.remove('is-arrived');
    });
    paths.forEach(path => {
      path.style.opacity = '';
      path.style.strokeDashoffset = '';
      path.style.filter = '';
    });
    center.style.transform = '';
    center.style.filter = '';
    if (circles) {
      circles.style.transform = '';
      circles.style.opacity = '';
    }
    hub.classList.remove('is-settled');
  }

  function measure() {
    if (!desktop.matches || reducedMotion.matches) {
      clearInlineMotion();
      return;
    }

    const centerRect = center.getBoundingClientRect();
    const centerX = centerRect.left + centerRect.width / 2;
    const centerY = centerRect.top + centerRect.height / 2;
    metrics = nodes.map(node => {
      const icon = node.querySelector('.hub-node-icon');
      const rect = icon.getBoundingClientRect();
      return {
        icon,
        label: node.querySelector('.hub-node-label'),
        dx: centerX - (rect.left + rect.width / 2),
        dy: centerY - (rect.top + rect.height / 2)
      };
    });
    update();
  }

  function update() {
    rafPending = false;
    if (!desktop.matches || reducedMotion.matches || !metrics.length) return;

    const stageRect = (stage || hub).getBoundingClientRect();
    const stickyTop = Math.max(84, (window.innerHeight - hub.offsetHeight) / 2);
    const releaseTop = stickyTop + hub.offsetHeight - (stage ? stage.offsetHeight : hub.offsetHeight);
    const stageProgress = clamp((stickyTop - stageRect.top) / Math.max(1, stickyTop - releaseTop));
    // A montagem ocupa 78% da área fixa; os 22% finais exibem o sistema completo.
    const progress = clamp(stageProgress / .78);
    const ignition = clamp(progress / .16);

    center.style.transform = `scale(${(.88 + ignition * .12).toFixed(3)}) rotate(${((1 - ignition) * -8).toFixed(2)}deg)`;
    center.style.filter = `drop-shadow(0 10px ${Math.round(22 + ignition * 18)}px rgba(47,212,196,${(.18 + ignition * .18).toFixed(2)}))`;
    if (circles) {
      circles.style.transform = `translate(-50%, -50%) scale(${(.86 + ignition * .14).toFixed(3)})`;
      circles.style.opacity = String(.35 + ignition * .65);
    }

    paths.forEach((path, index) => {
      const group = groups[index] || 0;
      const lineProgress = clamp((progress - (.04 + group * .18)) / .42);
      if (lineProgress >= .999) {
        path.style.opacity = '';
        path.style.strokeDashoffset = '';
        path.style.filter = '';
      } else {
        path.style.opacity = String(lineProgress);
        path.style.strokeDashoffset = `${((1 - lineProgress) * 34).toFixed(1)}px`;
        path.style.filter = `drop-shadow(0 0 ${Math.round(lineProgress * 5)}px rgba(47,212,196,.55))`;
      }
    });

    metrics.forEach((metric, index) => {
      const group = groups[index];
      const local = clamp((progress - (.12 + group * .18)) / .48);
      const eased = easeOutBack(local);
      const arc = Math.sin(Math.PI * local);
      const tx = metric.dx * (1 - eased) + curves[index][0] * arc;
      const ty = metric.dy * (1 - eased) + curves[index][1] * arc;
      const scale = .24 + .76 * Math.min(1, eased);
      const opacity = clamp(local / .18);
      const labelProgress = clamp((local - .66) / .34);

      if (local >= .999) {
        metric.icon.style.transform = '';
        metric.icon.style.opacity = '';
        metric.icon.style.filter = '';
      } else {
        metric.icon.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0) scale(${scale.toFixed(3)})`;
        metric.icon.style.opacity = String(opacity);
        metric.icon.style.filter = `blur(${((1 - opacity) * 5).toFixed(2)}px)`;
      }

      if (labelProgress >= .999) {
        metric.label.style.transform = '';
        metric.label.style.opacity = '';
        metric.label.style.filter = '';
      } else {
        metric.label.style.transform = `translateY(${((1 - labelProgress) * 12).toFixed(1)}px)`;
        metric.label.style.opacity = String(labelProgress);
        metric.label.style.filter = `blur(${((1 - labelProgress) * 4).toFixed(2)}px)`;
      }
      nodes[index].classList.toggle('is-arrived', local > .91);
    });

    hub.classList.toggle('is-settled', progress > .985);
  }

  function queueUpdate() {
    if (rafPending) return;
    rafPending = true;
    requestAnimationFrame(update);
  }

  let resizeTimer;
  window.addEventListener('scroll', queueUpdate, { passive: true });
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(measure, 120);
  }, { passive: true });
  desktop.addEventListener('change', measure);
  reducedMotion.addEventListener('change', measure);
  measure();
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
