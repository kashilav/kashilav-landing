// ===================================================
// CONFIGURAÇÃO DA MARCA — ponto único de troca
// Quando o nome definitivo for decidido, altere APENAS
// este bloco (+ <title> e <meta description> no index.html).
// ===================================================
const BRAND = {
  name: 'VECTA',              // nome exibido em todo o site
  whatsapp: '573150227207'   // número de WhatsApp com código do país, sem "+" (ex: 573001234567)
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
    nav_faq:"Preguntas", nav_cta:"Diagnóstico gratuito",

    // HERO
    hero_badge:"Sistema de captación de pacientes · Clínicas estéticas · Colombia",
    hero_title:'Pacientes nuevos cada mes, <em>de forma previsible.</em>',
    hero_sub:"Instalamos en tu clínica el Sistema Vecta™: un proceso completo de captación, calificación y agendamiento de pacientes. Tú te concentras en atender. Nosotros llenamos la agenda y te mostramos cuánta facturación generó cada peso invertido.",
    hero_cta1:"Solicitar diagnóstico gratuito",
    hero_cta2:"Conocer el sistema",
    hero_t1:"Captación bilingüe", hero_t2:"por procedimiento", hero_t3:"componentes de inversión",
    demo_label:"Demostración del sistema", scroll_cue:"Explora el recorrido",

    // JORNADA INTERACTIVA
    journey_eyebrow:"Una experiencia conectada",
    journey_title:'De una búsqueda a una consulta.<br><em>Sin perder el hilo.</em>',
    journey_sub:"Recorre el sistema. Cada etapa conserva el contexto de la anterior para convertir interés en una oportunidad medible.",
    journey_live:"Recorrido en vivo", journey_mobile_hint:"Desliza para continuar",
    journey_scene_1:"01 · Descubrimiento", journey_scene_2:"02 · Conversación", journey_scene_3:"03 · Calificación", journey_scene_4:"04 · Agendamiento", journey_scene_5:"05 · Retorno",
    scene_search_query:"mejor clínica de rinoplastia en Bogotá", scene_sponsored:"Patrocinado",
    scene_search_title:"Rinoplastia con evaluación personalizada", scene_search_text:"Conoce opciones, tiempos y agenda una valoración.",
    scene_chat_1:"Hola, quiero saber si soy candidata para una rinoplastia.", scene_chat_2:"Claro. Te haré 3 preguntas para orientarte mejor.",
    scene_profile:"Perfil del paciente", scene_intent:"Intención alta", scene_timing:"Planea decidir en 30 días", scene_location:"Bogotá",
    scene_calendar:"Agenda clínica", scene_appointment:"Valoración · Rinoplastia",
    scene_result:"Resultado atribuible", scene_demo:"Simulación", scene_revenue:"Facturación asociada al procedimiento",
    journey_1_title:"Aparece cuando la intención ya existe", journey_1_text:"La clínica entra en la conversación en el momento exacto en que alguien busca un procedimiento.",
    journey_2_title:"Responde mientras el interés sigue activo", journey_2_text:"Un primer contacto claro y ágil evita que la oportunidad termine en la agenda de otra clínica.",
    journey_3_title:"Separa curiosidad de intención real", journey_3_text:"El sistema organiza contexto, momento de decisión y procedimiento para priorizar cada conversación.",
    journey_4_title:"Convierte la conversación en una cita", journey_4_text:"Seguimiento, recordatorios y una ruta sencilla llevan al paciente hasta una valoración confirmada.",
    journey_5_title:"Conecta cada resultado con su origen", journey_5_text:"La clínica puede entender qué procedimiento, canal y conversación generaron facturación.",

    // STATEMENTS
    stmt1:'Pacientes reales.<br><em>No "me gusta".</em>',
    stmt2:'Crecimiento previsible.<br><em>Mes tras mes.</em>',

    // PROBLEMA
    prob_title:"¿Tu clínica es excelente, pero la agenda no se llena?",
    prob_sub:"Cada semana, hay personas que buscan en Google e Instagram los procedimientos que ofrece tu clínica. Sin un sistema que capte esas oportunidades, las califique y las convierta en citas, pueden terminar eligiendo otra clínica. El voz a voz es valioso, pero no permite proyectar el crecimiento.",

    // EYEBROWS
    eyebrow_sys:"El método", eyebrow_proc:"El proceso", eyebrow_roi:"Retorno",
    eyebrow_pq:"Perfil ideal", eyebrow_aut:"El mercado",
    eyebrow_planes:"Planes", eyebrow_faq:"Dudas",

    // SISTEMA VECTA (bento)
    sys_title:"Sistema Vecta™: así generamos pacientes",
    sys_sub:"No vendemos anuncios aislados. Instalamos un proceso completo que convierte búsquedas en consultas programadas. Estos son sus cuatro componentes:",
    sys1_t:"1 · Captación", sys1_p:"Atraemos a las personas que ya buscan tu procedimiento en tu ciudad, con mensajes que hablan el idioma de tus pacientes y de tu especialidad.",
    sys2_t:"2 · Calificación", sys2_p:"Identificamos y priorizamos a quienes tienen una intención real de agendar, con guiones de conversación diseñados para el sector estético.",
    sys2_pill:"Intención real",
    sys3_t:"3 · Agendamiento", sys3_p:"Respondemos con rapidez y llevamos cada conversación hasta una consulta confirmada en tu calendario. Cada hora de espera aumenta la posibilidad de que el paciente elija otra clínica.",
    sys4_t:"4 · Medición y escala", sys4_p:"Cada mes sabes cuántos pacientes llegaron, cuánto costó captar a cada uno y cuánta facturación generó cada procedimiento. Con esos datos validados, aumentamos la inversión en lo que funciona y detenemos lo que no.",
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
    f2_t:"Plan de captación", f2_p:"Definimos contigo la meta de pacientes, el presupuesto y el procedimiento que vamos a priorizar.",
    f3_t:"Captación", f3_p:"Activamos los canales donde tus pacientes ya buscan. Las cuentas quedan siempre a tu nombre.",
    f4_t:"Calificación", f4_p:"Identificamos y priorizamos a quienes tienen una intención real de agendar una consulta.",
    f5_t:"Agendamiento", f5_p:"Llevamos cada conversación hasta una consulta confirmada en tu calendario, con seguimiento y recordatorios.",
    f6_t:"Conversión", f6_p:"Te apoyamos con guiones y seguimiento para que más consultas terminen en procedimientos realizados.",
    f7_t:"Escala", f7_p:"Con el costo por paciente validado, aumentamos la inversión y repetimos lo que ya demostró funcionar.",

    // ROI
    roi_title:"Piensa en retorno, no en costo",
    roi_sub:"Mueve los controles y construye un escenario con los números de tu clínica.",
    roi_ticket:"Valor promedio del procedimiento", roi_patients:"Pacientes adicionales al mes", roi_investment:"Inversión mensual total",
    roi_scenario:"Escenario estimado", roi_revenue_label:"Facturación adicional", roi_per_month:"por mes",
    roi_return_label:"Facturación / inversión", roi_balance_label:"Facturación menos marketing",
    roi_disclaimer:"Simulación educativa. No descuenta costos clínicos ni impuestos, ni constituye una promesa de resultados.",
    roi_r1_l:"Valor promedio de un procedimiento",
    roi_r2_l:"Pacientes adicionales por mes (meta inicial)",
    roi_r3_l:"Ingreso adicional por mes",
    roi_r4_l:"Inversión en el plan Esencial",
    roi_r5_l:"Facturación dividida por la inversión total",
    roi_note:"Es un ejemplo ilustrativo, no una promesa. En el diagnóstico gratuito hacemos este cálculo con el valor real de tu procedimiento principal. Si las cuentas no cierran para tu clínica, te lo decimos antes de empezar.",
    roi_cta:"Evaluar el potencial de mi clínica",

    // PARA QUIÉN
    pq_title:"¿Es para tu clínica?",
    pq_yes_t:"Es para ti si...",
    pq_yes_1:"Tu clínica ya está activa y tiene procedimientos consolidados",
    pq_yes_2:"Quieres un flujo constante de pacientes nuevos y no depender solo del voz a voz",
    pq_yes_3:"Puedes invertir en pauta desde US$500 al mes, además de la tarifa de gestión y según el alcance de la campaña",
    pq_yes_4:"Quieres atraer pacientes internacionales a procedimientos de alto valor",
    pq_yes_5:"Valoras reportes claros de facturación por procedimiento, no métricas de vanidad",
    pq_no_t:"No es para ti si...",
    pq_no_1:"Acabas de abrir y aún no tienes procedimientos definidos ni equipo médico",
    pq_no_2:"No tienes presupuesto para pauta publicitaria. Los anuncios son el combustible del sistema",
    pq_no_3:"Buscas una agencia genérica que haga de todo para todos los sectores",
    pq_no_4:"Esperas resultados sin una inversión sostenida mínima de 60 días",

    // AUTORIDAD — el mercado
    aut_title:"Dónde se pierden oportunidades de nuevos pacientes",
    met1_v:"≈94%", met2_v:"26.786", met3_v:"79,3%",
    met1_l:"del mercado de buscadores en Colombia corresponde a Google",
    met2_l:"registros de ingreso de extranjeros por tratamiento médico en Colombia durante 2025",
    met3_l:"de las personas de 5 años o más usaron internet en Colombia en 2024",
    met_sources:'Fuentes: <a href="https://gs.statcounter.com/search-engine-market-share/all-worldwide/colombia" target="_blank" rel="noopener">StatCounter, junio de 2026</a>; <a href="https://portal.migracioncolombia.gov.co/fileadmin/user_upload/Flujos_migratorios_de_extranjeras_os__en_Colombia_cierre_2025.pdf" target="_blank" rel="noopener">Migración Colombia, cierre de 2025</a>; y <a href="https://www.dane.gov.co/files/operaciones/ECV/bol-ECV-2024.pdf" target="_blank" rel="noopener">DANE, ECV 2024</a>.',
    err1_t:"Responder tarde",
    err1_p:"Un paciente que espera horas puede seguir comparando y contactar otras clínicas. Responder con rapidez mejora la oportunidad de continuar la conversación. Por eso el agendamiento es una pieza central del sistema, no un detalle.",
    err2_t:"Medir aplausos, no ingresos",
    err2_p:'Seguidores y "me gusta" no pagan la nómina. Si el reporte que recibes no muestra pacientes, procedimientos y facturación, no estás midiendo lo que importa. Nuestro reporte responde una sola pregunta: cuánto dinero generó cada peso invertido.',
    err3_t:"Depender del voz a voz",
    err3_p:"Es una fuente valiosa de pacientes, pero también una de las menos predecibles. Una clínica que quiere crecer necesita un canal propio que pueda activar, medir y escalar de manera controlada. Eso es lo que construye el sistema.",
    aut_cta:"Descubrir dónde pierde pacientes mi clínica",

    // PLANES
    plan_title:"Planes y precios",
    plan_sub:"Tarifas de gestión claras, sin sorpresas. La inversión total se divide en gestión, pauta publicitaria y, cuando corresponda, tecnología. Antes de empezar definimos el total estimado; las cuentas y los pagos quedan a tu nombre.",
    p_tag:"Recomendado", p_cta:"Empezar con el diagnóstico",
    p1_t:"Esencial", p1_for:"Para dar el primer paso hacia una captación profesional",
    p1_1:"Captación de pacientes locales", p1_2:"4 anuncios nuevos al mes", p1_3:"Guion de calificación para tu WhatsApp", p1_4:"Informe mensual de resultados + reunión",
    p2_t:"Performance", p2_for:"Para generar citas de manera constante",
    p2_1:"Todo lo del plan Esencial", p2_2:"Captación mediante búsquedas en Google", p2_3:"6 a 8 anuncios al mes", p2_4:"Reactivación de tu base de pacientes", p2_5:"Informe cada dos semanas + 2 reuniones al mes",
    p3_t:"Escala", p3_for:"Para clínicas multisede o de alto volumen",
    p3_1:"Todo lo del plan Performance", p3_2:"Respuestas automáticas 24/7 en WhatsApp", p3_3:"10 a 12 anuncios al mes", p3_4:"Panel de facturación en tiempo real", p3_5:"Reunión semanal de resultados",
    p4_tag:"Oferta premium",
    p4_t:"Turismo Médico", p4_for:"Para atraer pacientes internacionales a procedimientos de alto valor",
    p4_1:"Todo lo del plan Escala", p4_2:"Captación internacional en inglés y español", p4_3:"Páginas por procedimiento en dos idiomas", p4_4:"Seguimiento multilingüe por WhatsApp", p4_5:"Acompañamiento del paciente desde el primer contacto hasta el día del procedimiento",
    p4_roi:"El retorno depende del valor promedio del procedimiento, el margen clínico, la pauta y la conversión real. En el diagnóstico calculamos el punto de equilibrio con los números de tu clínica; no asumimos que un solo paciente cubre toda la inversión.",
    p4_cta:"Evaluar mi potencial internacional",
    plan_scarcity:"Trabajamos con un número limitado de clínicas por ciudad y especialidad. No gestionamos campañas para dos competidores directos al mismo tiempo. La disponibilidad en tu ciudad se confirma durante el diagnóstico.",
    plan_guar:"Garantía de 60 días: si no alcanzamos la meta de oportunidades calificadas definida por escrito, devolvemos la tarifa de gestión del segundo mes.",

    // GARANTÍA
    gar_title:"Garantía de gestión medible",
    gar_text:"Antes de empezar definimos por escrito qué entendemos por una oportunidad calificada y cuál es la meta de 60 días. Si no la alcanzamos, devolvemos la tarifa de gestión del segundo mes. La pauta y la tecnología no están incluidas porque se pagan directamente a terceros.",

    // FAQ
    faq_title:"Preguntas frecuentes",
    faq1_q:"¿Qué pasa si ya trabajé con otra agencia y no funcionó?",
    faq1_a:'En el diagnóstico gratuito revisamos qué se hizo antes, cómo se midió y en qué punto se perdieron oportunidades. Solo proponemos una campaña cuando existe un plan con objetivos medibles. Si en 60 días no alcanzamos la meta de oportunidades calificadas definida por escrito, devolvemos la tarifa de gestión del segundo mes.',
    faq2_q:"¿En cuánto tiempo veo resultados?",
    faq2_a:"Como referencia, una campaña nueva puede necesitar hasta unas 3 semanas de aprendizaje, según el volumen y el ciclo de conversión. Por eso evaluamos la tendencia durante 60 días, no por resultados aislados de la primera semana. El plazo real depende del procedimiento, la ciudad, el presupuesto y la capacidad de respuesta de la clínica.",
    faq3_q:"¿Debo invertir en pauta además de la tarifa de gestión?",
    faq3_a:"Sí. Para una primera campaña enfocada en un procedimiento y una ciudad, usamos US$500 al mes como referencia inicial. Si incluimos más canales, ciudades o procedimientos, el presupuesto necesario puede ser mayor. El pago va directo a la plataforma desde una cuenta que queda a tu nombre.",
    faq4_q:"¿Cómo sé que el retorno será positivo antes de pagar?",
    faq4_a:"No es posible saberlo con certeza antes de empezar. En el diagnóstico estimamos el punto de equilibrio con el valor promedio del procedimiento, el margen clínico, la inversión total y una meta de conversión. Si el escenario no es viable, te lo decimos antes de contratar. La garantía cubre la meta de oportunidades calificadas definida por escrito; no promete facturación ni procedimientos realizados.",
    faq5_q:"¿Conocen el sector estético o trabajan con todo tipo de negocios?",
    faq5_a:"Trabajamos únicamente con clínicas del sector estético: medicina estética y armonización facial, cirugía plástica, dermatología estética, odontología estética, trasplante capilar y medicina para el control de peso. Conocemos la diferencia entre una rinoplastia abierta y una cerrada, entre la toxina botulínica y los rellenos dérmicos, y entendemos que cada procedimiento tiene un ciclo de decisión diferente. Ese conocimiento cambia el mensaje, la segmentación y la página de destino.",
    faq6_q:"¿Solo trabajan en Bogotá?",
    faq6_a:"Prestamos el servicio a clínicas en Bogotá, Medellín y Cali. La operación es completamente remota, por lo que la ciudad no afecta la calidad del servicio. Sí aplicamos una política de exclusividad: aceptamos un número limitado de clínicas por ciudad y especialidad para no gestionar campañas de dos competidores directos al mismo tiempo.",
    faq7_q:"¿Puedo contratar solo una parte del servicio?",
    faq7_a:"El sistema funciona como un proceso completo: captar sin calificar llena tu WhatsApp de contactos sin intención clara, y calificar sin agendar deja pacientes a mitad de camino. Por eso no vendemos servicios aislados. Contamos con planes para cada etapa de crecimiento; el plan Esencial es la puerta de entrada con la versión más compacta del sistema.",
    faq8_q:"¿Tienen experiencia con turismo médico y pacientes internacionales?",
    faq8_a:"Es nuestra oferta premium. La captación internacional funciona distinto: el paciente investiga más, compara países y necesita confianza antes de viajar. Por eso el plan Turismo Médico incluye captación en inglés y español, páginas por procedimiento en dos idiomas, seguimiento multilingüe por WhatsApp y acompañamiento del paciente desde el primer contacto hasta el día del procedimiento.",
    faq9_q:"¿Hay permanencia mínima? ¿De quién son las cuentas publicitarias?",
    faq9_a:"No hay permanencia mínima. Trabajamos mes a mes porque queremos que continúes por los resultados, no por una obligación contractual. Las cuentas publicitarias siempre son tuyas: las creamos a tu nombre o trabajamos con las que ya tienes. Si decides terminar el servicio, conservas el historial, las audiencias y todos los datos acumulados.",
    faq10_q:"¿Qué diferencia a Vecta de otras agencias?",
    faq10_a:"Cuatro aspectos. Primero, trabajamos únicamente con clínicas del sector estético. Segundo, instalamos un sistema completo de captación, calificación y agendamiento, no campañas aisladas. Tercero, medimos pacientes y facturación por procedimiento, no seguidores. Por último, limitamos el número de clínicas por ciudad y especialidad, y respaldamos el trabajo con una garantía de gestión medible a 60 días.",
    faq_cta:"Recibir un análisis estratégico",

    // FORMULARIO
    form_title:"Solicita tu diagnóstico gratuito",
    form_sub:"20 minutos, sin compromiso. Te mostramos dónde está el potencial de captación de tu clínica y qué haríamos con él. Te sirve aunque decidas no trabajar con nosotros.",
    form_nombre_l:"Tu nombre", form_wa_l:"WhatsApp (con código de país)", form_proc_l:"Procedimiento principal de tu clínica",
    form_proc_ph:"Selecciona un procedimiento...",
    proc_rino:"Rinoplastia", proc_botu:"Toxina botulínica / Botox", proc_fill:"Rellenos dérmicos",
    proc_lipo:"Liposucción / Corporal", proc_impl:"Implantes", proc_face:"Tratamientos faciales / Láser",
    proc_odont:"Odontología estética", proc_capilar:"Trasplante capilar", proc_otro:"Otro",
    form_btn:"Solicitar diagnóstico gratuito",
    form_wa_alt:"¿Prefieres hablar ahora?", form_wa_link:"Escríbenos por WhatsApp",
    form_micro:"Sin permanencia mínima · Sin porcentaje sobre tu pauta · Tus cuentas publicitarias son siempre tuyas.",
    form_pd:"Además, preparamos tu diagnóstico gratuito en menos de 48 horas.",
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
    hero_t1:"Bilingual acquisition", hero_t2:"per procedure", hero_t3:"Clear cost parts",
    demo_label:"System demonstration", scroll_cue:"Explore the journey",

    // INTERACTIVE JOURNEY
    journey_eyebrow:"One connected experience",
    journey_title:'From a search to a consultation.<br><em>Without losing context.</em>',
    journey_sub:"Explore the system. Each stage keeps the context from the previous one to turn interest into a measurable opportunity.",
    journey_live:"Live journey", journey_mobile_hint:"Scroll to continue",
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
    prob_sub:"Every week, people search Google and Instagram for the procedures your clinic offers. Without a system that captures those opportunities, qualifies them and walks them to the consultation, they may end up booking somewhere else. Word of mouth is valuable, but it is not predictable.",

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
    roi_return_label:"Revenue / investment", roi_balance_label:"Revenue minus marketing",
    roi_disclaimer:"Educational simulation. It does not deduct clinical costs or taxes and is not a promise of results.",
    roi_r1_l:"Average ticket of one procedure",
    roi_r2_l:"Additional patients per month (initial target)",
    roi_r3_l:"Additional revenue per month",
    roi_r4_l:"Investment in the Essential plan",
    roi_r5_l:"Revenue divided by total investment",
    roi_note:"This is an illustrative example, not a promise. In the free audit we run this math with your real ticket and your star procedure. If the numbers don't work for your clinic, we tell you before you start.",
    roi_cta:"Evaluate my clinic's potential",

    // PARA QUIÉN
    pq_title:"Is it right for your clinic?",
    pq_yes_t:"It's for you if...",
    pq_yes_1:"Your clinic is already active and has established procedures",
    pq_yes_2:"You want a steady flow of new patients, not to depend only on word of mouth",
    pq_yes_3:"You can invest in ads starting at US$500/month, separate from the fee and based on campaign scope",
    pq_yes_4:"You want to attract high-ticket international patients",
    pq_yes_5:"You value clear revenue reports per procedure, not vanity metrics",
    pq_no_t:"It's not for you if...",
    pq_no_1:"You just opened and don't yet have defined procedures or a medical team",
    pq_no_2:"You have no budget for paid media. Ads are the fuel of the system",
    pq_no_3:"You're looking for a generic agency that does everything for everyone",
    pq_no_4:"You expect results without a sustained minimum investment of 60 days",

    // AUTORIDAD
    aut_title:"Why most clinics lose patients",
    met1_v:"≈94%", met2_v:"26,786", met3_v:"79.3%",
    met1_l:"of Colombia's search engine market corresponds to Google",
    met2_l:"foreign entries for medical treatment in Colombia during 2025",
    met3_l:"of people aged 5 or older used the internet in Colombia in 2024",
    met_sources:'Sources: <a href="https://gs.statcounter.com/search-engine-market-share/all-worldwide/colombia" target="_blank" rel="noopener">StatCounter, June 2026</a>; <a href="https://portal.migracioncolombia.gov.co/fileadmin/user_upload/Flujos_migratorios_de_extranjeras_os__en_Colombia_cierre_2025.pdf" target="_blank" rel="noopener">Migración Colombia, year-end 2025</a>; and <a href="https://www.dane.gov.co/files/operaciones/ECV/bol-ECV-2024.pdf" target="_blank" rel="noopener">DANE, ECV 2024</a>.',
    err1_t:"Replying late",
    err1_p:"A patient who waits for hours may keep comparing and contact other clinics. A fast response improves the chance of continuing the conversation. That's why booking is a core piece of the system, not a detail.",
    err2_t:"Measuring applause, not income",
    err2_p:'Followers and "likes" don\'t pay payroll. If the report you receive doesn\'t show patients, procedures and revenue, you are not measuring what matters. Our report answers one question: how much money every dollar generated.',
    err3_t:"Depending on word of mouth",
    err3_p:"It's the best source of patients and also the least controllable. A clinic that wants to grow needs its own channel it can turn on, measure and scale at will. That is exactly what the system builds.",
    aut_cta:"Find out where my clinic loses patients",

    // PLANES
    plan_title:"Plans & pricing",
    plan_sub:"Public management fees, no surprises. Total investment is divided into management, ad spend and, when applicable, technology. Before starting, we define the estimated total; accounts and payments remain in your name.",
    p_tag:"Recommended", p_cta:"Start with the audit",
    p1_t:"Essential", p1_for:"Your first step into professional patient acquisition",
    p1_1:"Local patient acquisition", p1_2:"4 new ads per month", p1_3:"Qualification script for your WhatsApp", p1_4:"Monthly results report + meeting",
    p2_t:"Performance", p2_for:"To fill the calendar consistently",
    p2_1:"Everything in Essential", p2_2:"Acquisition on Google searches", p2_3:"6 to 8 ads per month", p2_4:"Reactivation of your existing patients", p2_5:"Bi-weekly report + 2 meetings per month",
    p3_t:"Scale", p3_for:"For multi-location or high-volume clinics",
    p3_1:"Everything in Performance", p3_2:"24/7 automatic replies on your WhatsApp", p3_3:"10 to 12 ads per month", p3_4:"Live revenue dashboard", p3_5:"Weekly results meeting",
    p4_tag:"Premium offer",
    p4_t:"Medical Tourism", p4_for:"High-ticket international patients",
    p4_1:"Everything in Scale", p4_2:"International acquisition in English and Spanish", p4_3:"Per-procedure pages in two languages", p4_4:"Multilingual WhatsApp follow-up", p4_5:"Patient guidance from first contact to procedure day",
    p4_roi:"Return depends on average ticket, clinical margin, ad spend and actual conversion. During the audit, we calculate the break-even point using your clinic's numbers; we do not assume one patient covers the entire investment.",
    p4_cta:"Evaluate my international potential",
    plan_scarcity:"We work with a limited number of clinics per city and per specialty. We never acquire patients for two direct competitors at the same time. Availability for your city is confirmed in the audit.",
    plan_guar:"60-day guarantee: if we do not reach the written target for qualified opportunities, we refund the second month's management fee.",

    // GARANTÍA
    gar_title:"Measurable management guarantee",
    gar_text:"Before starting, we define in writing what a qualified opportunity is and the 60-day target. If we do not reach it, we refund the second month's management fee. Ad spend and technology are excluded because they are paid directly to third parties.",

    // FAQ
    faq_title:"Frequently asked questions",
    faq1_q:"What if I already worked with another agency and it didn't work?",
    faq1_a:'During the free audit, we review what was done before, how it was measured and where conversion was lost. We only propose a campaign when there is a measurable hypothesis. If we do not reach the written 60-day target for qualified opportunities, we refund the second month\'s management fee.',
    faq2_q:"How long until I see results?",
    faq2_a:"As a reference, a new campaign may need up to about 3 weeks of learning, depending on volume and the conversion cycle. That is why we evaluate the trend over 60 days, not isolated results from the first week. Actual timing depends on the procedure, city, budget and the clinic's response capacity.",
    faq3_q:"Do I need to invest in ads on top of the fee?",
    faq3_a:"Yes. For an initial campaign focused on one procedure and one city, we use US$500 per month as a starting reference. If we include more channels, cities or procedures, the required budget may be higher. Payment goes directly to the platform from an account in your name.",
    faq4_q:"How do I know the return will be positive before paying?",
    faq4_a:"It cannot be known with certainty before starting. During the audit, we estimate the break-even point using average ticket, clinical margin, total investment and a conversion target. If the scenario is not viable, we say so before you hire us. The guarantee covers the written target for qualified opportunities; it does not promise revenue or completed procedures.",
    faq5_q:"Do you understand aesthetic procedures or are you a generic agency?",
    faq5_a:"We work only with clinics in the aesthetic sector: aesthetic medicine and facial harmonization, plastic surgery, aesthetic dermatology, aesthetic dentistry, hair transplant and medical weight loss. We know the difference between open and closed rhinoplasty, between botulinum toxin and fillers, and how each procedure has a different decision cycle. That changes the message, the targeting and the landing page. A generic agency can't do that well.",
    faq6_q:"Do you only work with Bogotá?",
    faq6_a:"Today we work with clinics in Bogotá, Medellín and Cali. The operation is 100% remote, so the city doesn't limit service quality. What does limit is our exclusivity policy: we accept a limited number of clinics per city and specialty, so we never acquire patients for two direct competitors at once.",
    faq7_q:"Can I hire only part of the service?",
    faq7_a:"The system works as a complete process: attracting without qualifying fills your WhatsApp with curious people, and qualifying without booking leaves patients halfway. That's why we don't sell loose pieces. What does exist are plans by growth stage: the Essential plan is the entry point with the most compact version of the system.",
    faq8_q:"Do you have experience with medical tourism and international patients?",
    faq8_a:"It's our premium offer. International acquisition works differently: the patient researches more, compares countries and needs trust before traveling. That's why the Medical Tourism plan includes acquisition in English and Spanish, per-procedure pages in two languages, multilingual WhatsApp follow-up and patient guidance from first contact to procedure day.",
    faq9_q:"Is there a minimum commitment? Who owns the ad accounts?",
    faq9_a:"There is no minimum commitment. We work month to month because clients should stay for results, not because of a contract. The ad accounts are always yours: we create them in your name or work within the ones you already have. If you decide to leave tomorrow, you take the history, the audiences and all the accumulated data.",
    faq10_q:"What makes Vecta different from other agencies?",
    faq10_a:"Four things. One: we work only with clinics in the aesthetic sector, not with just any business. Two: we install a complete system for attracting, qualifying and booking patients, not isolated campaigns. Three: we measure patients and revenue per procedure, not followers. Four: we limit the number of clinics per city and specialty, and we back the work with a measurable 60-day management guarantee.",
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
    const mobileTitle = document.getElementById('journeyMobileTitle');
    const mobileText = document.getElementById('journeyMobileText');
    if (mobileTitle) mobileTitle.textContent = i18n[l][`journey_${scene}_title`] || '';
    if (mobileText) mobileText.textContent = i18n[l][`journey_${scene}_text`] || '';
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
  const mobileCopy = document.getElementById('journeyMobileCopy');
  const mobileStep = document.getElementById('journeyMobileStep');
  const mobileTitle = document.getElementById('journeyMobileTitle');
  const mobileText = document.getElementById('journeyMobileText');
  const steps = [...document.querySelectorAll('[data-journey-step]')];
  const mobileViewport = window.matchMedia('(max-width: 900px)');
  if (!visual || !steps.length) return;

  function setScene(scene) {
    const next = String(scene);
    const changed = visual.dataset.scene !== next;
    visual.dataset.scene = next;
    steps.forEach(step => step.classList.toggle('is-active', step.dataset.journeyStep === next));
    if (progress) progress.style.width = `${Number(next) * 20}%`;
    if (label) label.textContent = i18n[lang][`journey_scene_${next}`] || '';
    if (mobileStep) mobileStep.textContent = next.padStart(2, '0');
    if (mobileTitle) mobileTitle.textContent = i18n[lang][`journey_${next}_title`] || '';
    if (mobileText) mobileText.textContent = i18n[lang][`journey_${next}_text`] || '';
    if (changed && mobileCopy) {
      mobileCopy.classList.remove('is-changing');
      void mobileCopy.offsetWidth;
      mobileCopy.classList.add('is-changing');
    }
  }

  const observer = new IntersectionObserver(entries => {
    if (mobileViewport.matches) return;
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) setScene(visible.target.dataset.journeyStep);
  }, { threshold: [0.2, 0.45, 0.7], rootMargin: '-18% 0px -28% 0px' });

  let mobileRafPending = false;

  function updateMobileScene() {
    mobileRafPending = false;
    if (!mobileViewport.matches) return;

    // Uma linha fixa logo abaixo do bloco visual decide a etapa ativa.
    // Isso evita que duas interseções concorrentes façam a cena piscar.
    const focusY = Math.min(window.innerHeight * .72, window.innerHeight - 110);
    let closestStep = steps[0];
    let closestDistance = Infinity;

    steps.forEach(step => {
      const rect = step.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const distance = Math.abs(center - focusY);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestStep = step;
      }
    });

    setScene(closestStep.dataset.journeyStep);
  }

  function queueMobileSceneUpdate() {
    if (!mobileViewport.matches || mobileRafPending) return;
    mobileRafPending = true;
    requestAnimationFrame(updateMobileScene);
  }

  steps.forEach(step => observer.observe(step));
  setScene('1');
  window.addEventListener('scroll', queueMobileSceneUpdate, { passive: true });
  window.addEventListener('resize', queueMobileSceneUpdate, { passive: true });
  mobileViewport.addEventListener('change', () => {
    if (mobileViewport.matches) queueMobileSceneUpdate();
  });
  queueMobileSceneUpdate();
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
