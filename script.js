// ===================================================
// VECTA — script.js (vanilla, sin dependencias)
// ===================================================

// WhatsApp: pon aquí el número con código de país, solo dígitos (ej. '573001234567').
// Mientras esté vacío, TODOS los botones y enlaces de WhatsApp se ocultan.
const WHATSAPP_NUMERO = '';

// Respaldo del formulario cuando no hay WhatsApp configurado (correo ya usado en los datos estructurados del sitio).
const EMAIL_CONTACTO = 'contacto@vectamkt.com';
const BRAND_NAME = 'VECTA';

// ===== Traducciones ES / EN =====
const i18n = {
  es: {
    // HERO
    hero_badge:"Sistema de captación de pacientes · Clínicas estéticas · Colombia",
    hero_sub:"Instalamos en tu clínica el Sistema Vecta™: un proceso completo de captación, calificación y agendamiento de pacientes. Tú te concentras en atender. Nosotros llenamos la agenda y te mostramos cuánta facturación generó cada peso invertido.",
    hero_cta1:"Solicitar diagnóstico gratuito",
    hero_cta2:"Conocer el sistema",
    hero_t1:"Captación bilingüe", hero_t2:"por procedimiento", hero_t3:"componentes de inversión",
    scene_search_query:"mejor clínica de rinoplastia en Bogotá", scene_sponsored:"Patrocinado",
    scene_search_title:"Rinoplastia con evaluación personalizada", scene_search_text:"Conoce opciones, tiempos y agenda una valoración.",
    scene_chat_1:"Hola, quiero saber si soy candidata para una rinoplastia.", scene_chat_2:"Claro. Te haré 3 preguntas para orientarte mejor.",
    scene_profile:"Perfil del paciente", scene_intent:"Intención alta", scene_timing:"Planea decidir en 30 días", 
    scene_calendar:"Agenda clínica", scene_appointment:"Valoración · Rinoplastia",
    scene_result:"Resultado atribuible", scene_demo:"Simulación", scene_revenue:"Facturación asociada al procedimiento",
    journey_1_title:"Aparece cuando la intención ya existe", 
    journey_3_title:"Separa curiosidad de intención real", 
    journey_4_title:"Convierte la conversación en una cita", 
    journey_5_title:"Conecta cada resultado con su origen", 
    stmt1:'Pacientes reales.<br><em>No "me gusta".</em>',
    // PROBLEMA
    prob_title:"¿Tu clínica es excelente, pero la agenda no se llena?",
    prob_sub:"Cada semana, hay personas que buscan en Google e Instagram los procedimientos que ofrece tu clínica. Sin un sistema que capte esas oportunidades, las califique y las convierta en citas, pueden terminar eligiendo otra clínica. El voz a voz es valioso, pero no permite proyectar el crecimiento.",
    // SISTEMA VECTA (bento)
    sys_sub:"No vendemos anuncios aislados. Instalamos un proceso completo que convierte búsquedas en consultas programadas. Estos son sus cuatro componentes:",
    sys1_t:"1 · Captación", sys1_p:"Atraemos a las personas que ya buscan tu procedimiento en tu ciudad, con mensajes que hablan el idioma de tus pacientes y de tu especialidad.",
    sys2_t:"2 · Calificación", sys2_p:"Identificamos y priorizamos a quienes tienen una intención real de agendar, con guiones de conversación diseñados para el sector estético.",
    sys2_pill:"Intención real",
    sys3_t:"3 · Agendamiento", sys3_p:"Respondemos con rapidez y llevamos cada conversación hasta una consulta confirmada en tu calendario. Cada hora de espera aumenta la posibilidad de que el paciente elija otra clínica.",
    sys4_t:"4 · Medición y escala", sys4_p:"Cada mes sabes cuántos pacientes llegaron, cuánto costó captar a cada uno y cuánta facturación generó cada procedimiento. Con esos datos validados, aumentamos la inversión en lo que funciona y detenemos lo que no.",
    chip_pac:"Pacientes", chip_costo:"Costo por paciente", chip_fact:"Facturación",
    // ROI
    roi_sub:"Mueve los controles y construye un escenario con los números de tu clínica.",
    roi_ticket:"Valor promedio del procedimiento", roi_patients:"Pacientes adicionales al mes", roi_investment:"Inversión mensual total",
    roi_scenario:"Escenario estimado", roi_revenue_label:"Facturación adicional", roi_per_month:"por mes",
    roi_return_label:"Facturación / inversión", roi_balance_label:"Facturación menos marketing",
    roi_disclaimer:"Simulación educativa. No descuenta costos clínicos ni impuestos, ni constituye una promesa de resultados.",
    roi_note:"Es un ejemplo ilustrativo, no una promesa. En el diagnóstico gratuito hacemos este cálculo con el valor real de tu procedimiento principal. Si las cuentas no cierran para tu clínica, te lo decimos antes de empezar.",
    roi_cta:"Evaluar el potencial de mi clínica",
    // PARA QUIÉN
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

    // ---- NUEVO (rediseño) ----
    doc_title:"VECTA | Pacientes previsibles para clínicas estéticas",
    skip:"Saltar al contenido", lang_aria:"Cambiar idioma", menu_open:"Abrir menú", menu_close:"Cerrar menú",
    nav_sistema:"El sistema", nav_servicios:"Servicios", nav_ia:"Visibilidad en IA", nav_nosotros:"Nosotros", nav_planes:"Planes", nav_faq:"Preguntas", nav_cta:"Diagnóstico gratuito",
    hero_title:'Pacientes nuevos cada mes,<br><em>de forma previsible.</em>',
    demo_label:"Demostración del sistema",
    db_title:"Sistema VECTA · Panel de facturación", db_live:"En vivo",
    db_l1:"Citas programadas", db_l2:"Costo por cita", db_l3:"ROAS total",
    db_d1:"+21% vs. mes anterior", db_d2:"−12% vs. mes anterior", db_d3:"+0.4x vs meta",
    db_chart_t:"Oportunidades por semana", db_period:"últimas 8 semanas", db_proc_t:"Por procedimiento",
    db_th1:"Procedimiento", db_th2:"Oportunidades", db_th3:"Citas",
    db_p1:"Rinoplastia", db_p2:"Botox", db_p3:"Liposucción",
    eyebrow_sys:"El método", eyebrow_serv:"Servicios", eyebrow_proc:"El proceso", eyebrow_roi:"Retorno", eyebrow_pq:"Perfil ideal", eyebrow_planes:"Planes", eyebrow_faq:"Dudas", eyebrow_aut:"El mercado",
    eyebrow_prob:"El problema", eyebrow_ia:"Nuevo · Visibilidad en IA", eyebrow_nos:"Nosotros", eyebrow_form:"Diagnóstico gratuito",
    sys_title:'Sistema Vecta™:<br><em>así generamos pacientes</em>',
    scene_l1:"01 · Captación", scene_l2:"02 · Calificación", scene_l3:"03 · Agendamiento", scene_l4:"04 · Medición",
    chat_online:"en línea", scene_chat_3:"Perfecto. Me gustaría decidir en las próximas semanas.",
    scene_month:"Julio", scene_confirmed:"10:30 · Confirmada", scene_reminder:"Recordatorio enviado al paciente por WhatsApp.", scene_rev_val:"US$ 4.800",
    chip_peso:"Control de peso",
    serv_title:'Todo lo que el sistema<br><em>instala en tu clínica</em>',
    serv_sub:"Ocho frentes de trabajo, un solo objetivo: más pacientes en tu agenda.", tag_new:"Nuevo",
    serv1_t:"Anuncios de captación", serv1_p:"Atraemos a quienes ya buscan tu procedimiento en tu ciudad, con mensajes propios de cada especialidad.",
    serv2_t:"Creativos y contenido", serv2_p:"Piezas y mensajes pensados para cada procedimiento, sin promesas de resultados clínicos ni antes y después.",
    serv3_t:"WhatsApp y agendamiento", serv3_p:"Respondemos con rapidez y llevamos cada conversación hasta una consulta confirmada en tu calendario.",
    serv4_t:"CRM y seguimiento", serv4_p:"Cada contacto queda registrado, con seguimiento y recordatorios hasta la valoración.",
    serv5_t:"Visibilidad en IA", serv5_p:"Medimos cada mes si ChatGPT, Gemini, Google y Perplexity mencionan a tu clínica, y corregimos lo que haga falta.",
    serv6_t:"SEO local y Perfil de Google", serv6_p:"Ordenamos tu Perfil de Google y tu presencia local para que te encuentren cuando buscan cerca.",
    serv7_t:"Reporte de facturación", serv7_p:"Pacientes, costo por paciente y facturación por procedimiento, sin métricas de vanidad.",
    serv8_t:"Turismo médico", serv8_p:"Captación en inglés y español, páginas por procedimiento y acompañamiento hasta el día del procedimiento.",
    ia_title:'Cuando un paciente le pregunta a la IA,<br><em>¿te recomienda a ti?</em>',
    ia_sub:"Cada mes medimos en ChatGPT, Gemini, Google (AI Overview y AI Mode) y Perplexity si tu clínica aparece, y corregimos lo que la IA necesita para recomendarte.",
    ia_disc:"Sin promesas de resultados: las respuestas de la IA cambian y nadie puede garantizar que te mencionen. Lo que sí hacemos es medir, corregir y mostrarte la evolución.",
    ia_p1_t:"Qué medimos", ia_p1_p:"Si tu clínica aparece, cómo se describe y qué fuentes cita la IA para las preguntas que hacen tus pacientes.",
    ia_p2_t:"Qué corregimos", ia_p2_p:"La información, las páginas y los datos del negocio que la IA lee para decidir a quién recomendar.",
    ia_p3_t:"Qué ves en el reporte", ia_p3_p:"Una vista mensual de tu visibilidad frente a otras clínicas y las acciones del mes siguiente.",
    ia_chat_aria:"Simulación de una conversación con un asistente de IA", ia_assistant:"Asistente de IA",
    ia_q:"¿Cuál es la mejor clínica de rinoplastia en Bogotá?",
    ia_a_intro:"Estas son algunas clínicas que suelen mencionarse para rinoplastia en Bogotá:",
    ia_a_1:"Cirugía plástica facial · valoración presencial", ia_a_2:"Rinoplastia y armonización facial", ia_a_3:"Cirugía plástica y estética",
    ia_n_1:"Clínica A", ia_n_2:"Clínica B", ia_n_3:"Clínica C",
    ia_absent:"Tu clínica no aparece en esta respuesta.",
    nos_title:'Dos fundadores.<br><em>Un solo objetivo: tu agenda llena.</em>',
    nos_p:"Somos una agencia pequeña que trata el marketing como un trabajo de precisión. Usamos datos e inteligencia artificial en el día a día y desarrollamos tecnología propia para medir la visibilidad de tu clínica en la IA. Tus cuentas siempre quedan a nombre de la clínica, y nuestros anuncios respetan las reglas de publicidad en salud de cada país.",
    pil1_t:"Precisión", pil1_p:"Medimos pacientes y facturación por procedimiento, no seguidores ni “me gusta”.",
    pil2_t:"Tecnología", pil2_p:"Datos e IA en el trabajo diario y tecnología propia para medir tu visibilidad en la IA.",
    pil3_t:"Cuidado", pil3_p:"Cuentas siempre a nombre de la clínica y anuncios dentro de las reglas de salud de cada país.",
    fo1_aria:"Foto del fundador 1", fo2_aria:"Foto del fundador 2",
    proc_title:'Cómo trabajamos,<br><em>paso a paso</em>',
    proc_sub:"Del primer análisis a la escala. Sin misterio y sin letra pequeña.",
    f1_t:"Diagnóstico", f1_p:"Analizamos tu clínica, tu competencia y tu procedimiento estrella. Gratis y en menos de 48 horas.",
    f2_t:"Plan de captación", f2_p:"Definimos contigo la meta de pacientes, el presupuesto y el procedimiento que vamos a priorizar.",
    f3_t:"Captación y calificación", f3_p:"Activamos los canales donde tus pacientes ya buscan y priorizamos a quienes tienen una intención real de agendar. Las cuentas quedan siempre a tu nombre.",
    f4_t:"Agendamiento y conversión", f4_p:"Llevamos cada conversación hasta una consulta confirmada, con seguimiento, recordatorios y guiones para que más consultas terminen en procedimientos realizados.",
    f5_t:"Medición y escala", f5_p:"Con el costo por paciente validado, aumentamos la inversión y repetimos lo que ya demostró funcionar.",
    roi_title:'Piensa en retorno,<br><em>no en costo</em>',
    pq_title:'¿Es para <em>tu clínica?</em>',
    plan_title:'Planes y <em>precios</em>', per_month:"/mes", p_ia:"Visibilidad en IA: medición mensual",
    faq_title:'Preguntas <em>frecuentes</em>',
    faq11_q:"¿Qué es la visibilidad en IA y por qué importa?",
    faq11_a:"Cada vez más pacientes le preguntan a asistentes como ChatGPT, Gemini o Perplexity, o ven respuestas de IA en Google, antes de elegir una clínica. La visibilidad en IA es qué tanto aparece tu clínica en esas respuestas y cómo se la describe. No podemos garantizar que te mencionen, porque cada plataforma decide por su cuenta; lo que hacemos es medirlo cada mes, corregir la información que la IA lee sobre tu clínica y mostrarte la evolución en el informe.",
    aut_title:'Dónde se pierden oportunidades<br><em>de nuevos pacientes</em>',
    form_title:'Solicita tu<br><em>diagnóstico gratuito</em>',
    form_mail_note:"Abrimos tu correo con el mensaje listo para enviar. Si no se abre, escríbenos a contacto@vectamkt.com.",
    foot:"Sistema de crecimiento para clínicas estéticas y turismo médico · Bogotá · Medellín · Cali · América Latina"

  },

  en: {
    // HERO
    hero_badge:"Patient acquisition system · Aesthetic clinics · Colombia",
    hero_sub:"We install the Vecta System™ in your clinic: a complete process for attracting, qualifying and booking patients. You focus on treating them. We fill the calendar and show you how much revenue every dollar generated.",
    hero_cta1:"Request your free growth audit",
    hero_cta2:"See how the system works",
    hero_t1:"Bilingual acquisition", hero_t2:"per procedure", hero_t3:"Clear cost parts",
    scene_search_query:"best rhinoplasty clinic in Bogotá", scene_sponsored:"Sponsored",
    scene_search_title:"Rhinoplasty with a personalized evaluation", scene_search_text:"Explore options, timing and book an evaluation.",
    scene_chat_1:"Hi, I'd like to know if I'm a candidate for rhinoplasty.", scene_chat_2:"Of course. I'll ask you 3 questions to guide you better.",
    scene_profile:"Patient profile", scene_intent:"High intent", scene_timing:"Decision within 30 days", 
    scene_calendar:"Clinic calendar", scene_appointment:"Evaluation · Rhinoplasty",
    scene_result:"Attributable result", scene_demo:"Simulation", scene_revenue:"Revenue associated with the procedure",
    journey_1_title:"Show up when intent already exists", 
    journey_3_title:"Separate curiosity from real intent", 
    journey_4_title:"Turn the conversation into an appointment", 
    journey_5_title:"Connect every result to its origin", 
    stmt1:'Real patients.<br><em>Not "likes".</em>',
    // PROBLEMA
    prob_title:"Great clinic, but the calendar won't fill up?",
    prob_sub:"Every week, people search Google and Instagram for the procedures your clinic offers. Without a system that captures those opportunities, qualifies them and walks them to the consultation, they may end up booking somewhere else. Word of mouth is valuable, but it is not predictable.",
    // SISTEMA VECTA
    sys_sub:"We don't sell loose ads. We install a complete process that turns searches into booked consultations. These are its four pieces:",
    sys1_t:"1 · Attraction", sys1_p:"We reach the people already searching for your procedure in your city, with messages that speak the language of your patients and your specialty.",
    sys2_t:"2 · Qualification", sys2_p:"We filter out the curious and prioritize people with real intent to book, using conversation scripts built for the aesthetic sector.",
    sys2_pill:"Real intent",
    sys3_t:"3 · Booking", sys3_p:"We respond fast and walk every conversation to a confirmed consultation in your calendar. Every hour of silence hands patients to your competitors.",
    sys4_t:"4 · Measurement and scale", sys4_p:"Every month you know how many patients came in, what each one cost and how much revenue each procedure generated. With those numbers validated, we increase investment in what works and cut what doesn't.",
    chip_pac:"Patients", chip_costo:"Cost per patient", chip_fact:"Revenue",
    // ROI
    roi_sub:"Move the controls and build a scenario with your clinic's numbers.",
    roi_ticket:"Average ticket", roi_patients:"Additional patients per month", roi_investment:"Total monthly investment",
    roi_scenario:"Estimated scenario", roi_revenue_label:"Additional revenue", roi_per_month:"per month",
    roi_return_label:"Revenue / investment", roi_balance_label:"Revenue minus marketing",
    roi_disclaimer:"Educational simulation. It does not deduct clinical costs or taxes and is not a promise of results.",
    roi_note:"This is an illustrative example, not a promise. In the free audit we run this math with your real ticket and your star procedure. If the numbers don't work for your clinic, we tell you before you start.",
    roi_cta:"Evaluate my clinic's potential",
    // PARA QUIÉN
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

    // ---- NEW (redesign) ----
    doc_title:"VECTA | Predictable patients for aesthetic clinics",
    skip:"Skip to content", lang_aria:"Change language", menu_open:"Open menu", menu_close:"Close menu",
    nav_sistema:"The system", nav_servicios:"Services", nav_ia:"AI visibility", nav_nosotros:"About us", nav_planes:"Plans", nav_faq:"FAQ", nav_cta:"Free growth audit",
    hero_title:'New patients every month,<br><em>predictably.</em>',
    demo_label:"System demonstration",
    db_title:"VECTA System · Revenue dashboard", db_live:"Live",
    db_l1:"Booked appointments", db_l2:"Cost per appointment", db_l3:"Total ROAS",
    db_d1:"+21% vs. last month", db_d2:"−12% vs. last month", db_d3:"+0.4x vs target",
    db_chart_t:"Opportunities per week", db_period:"last 8 weeks", db_proc_t:"By procedure",
    db_th1:"Procedure", db_th2:"Opportunities", db_th3:"Appts",
    db_p1:"Rhinoplasty", db_p2:"Botox", db_p3:"Liposuction",
    eyebrow_sys:"The method", eyebrow_serv:"Services", eyebrow_proc:"The process", eyebrow_roi:"Return", eyebrow_pq:"Fit", eyebrow_planes:"Plans", eyebrow_faq:"Questions", eyebrow_aut:"The market",
    eyebrow_prob:"The problem", eyebrow_ia:"New · AI visibility", eyebrow_nos:"About us", eyebrow_form:"Free audit",
    sys_title:'The Vecta System™:<br><em>how we generate patients</em>',
    scene_l1:"01 · Attraction", scene_l2:"02 · Qualification", scene_l3:"03 · Booking", scene_l4:"04 · Measurement",
    chat_online:"online", scene_chat_3:"Great. I'd like to decide in the coming weeks.",
    scene_month:"July", scene_confirmed:"10:30 · Confirmed", scene_reminder:"Reminder sent to the patient on WhatsApp.", scene_rev_val:"US$ 4,800",
    chip_peso:"Weight control",
    serv_title:'Everything the system<br><em>installs in your clinic</em>',
    serv_sub:"Eight work fronts, one goal: more patients in your calendar.", tag_new:"New",
    serv1_t:"Patient acquisition ads", serv1_p:"We reach people already searching for your procedure in your city, with messages built for each specialty.",
    serv2_t:"Creatives and content", serv2_p:"Pieces and messages designed for each procedure, with no clinical-result promises and no before-and-after.",
    serv3_t:"WhatsApp and booking", serv3_p:"We reply fast and walk every conversation to a confirmed consultation in your calendar.",
    serv4_t:"CRM and follow-up", serv4_p:"Every contact is logged, with follow-up and reminders until the evaluation.",
    serv5_t:"AI visibility", serv5_p:"Every month we measure whether ChatGPT, Gemini, Google and Perplexity mention your clinic, and we fix what is needed.",
    serv6_t:"Local SEO and Google Business Profile", serv6_p:"We organize your Google Business Profile and local presence so people find you when they search nearby.",
    serv7_t:"Revenue reporting", serv7_p:"Patients, cost per patient and revenue per procedure, with no vanity metrics.",
    serv8_t:"Medical tourism", serv8_p:"Acquisition in English and Spanish, per-procedure pages and guidance up to the day of the procedure.",
    ia_title:'When a patient asks AI,<br><em>does it recommend you?</em>',
    ia_sub:"Every month we measure whether your clinic appears in ChatGPT, Gemini, Google (AI Overview and AI Mode) and Perplexity, and we fix what AI needs in order to recommend you.",
    ia_disc:"No promised results: AI answers change and nobody can guarantee a mention. What we do is measure, fix and show you the trend.",
    ia_p1_t:"What we measure", ia_p1_p:"Whether your clinic appears, how it is described and which sources AI cites for the questions your patients ask.",
    ia_p2_t:"What we fix", ia_p2_p:"The information, pages and business data that AI reads to decide who to recommend.",
    ia_p3_t:"What you see in the report", ia_p3_p:"A monthly view of your visibility compared with other clinics, and the actions for the following month.",
    ia_chat_aria:"Simulation of a conversation with an AI assistant", ia_assistant:"AI assistant",
    ia_q:"What is the best rhinoplasty clinic in Bogotá?",
    ia_a_intro:"These are some clinics that are often mentioned for rhinoplasty in Bogotá:",
    ia_a_1:"Facial plastic surgery · in-person evaluation", ia_a_2:"Rhinoplasty and facial harmonization", ia_a_3:"Plastic and aesthetic surgery",
    ia_n_1:"Clinic A", ia_n_2:"Clinic B", ia_n_3:"Clinic C",
    ia_absent:"Your clinic does not appear in this answer.",
    nos_title:'Two founders.<br><em>One goal: a full calendar.</em>',
    nos_p:"We are a small agency that treats marketing as precision work. We use data and artificial intelligence every day and build our own technology to measure your clinic's visibility in AI. Your accounts always stay in the clinic's name, and our ads follow each country's health advertising rules.",
    pil1_t:"Precision", pil1_p:"We measure patients and revenue per procedure, not followers or “likes”.",
    pil2_t:"Technology", pil2_p:"Data and AI in daily work, plus our own technology to measure your visibility in AI.",
    pil3_t:"Care", pil3_p:"Accounts always in the clinic's name and ads within each country's health advertising rules.",
    fo1_aria:"Photo of founder 1", fo2_aria:"Photo of founder 2",
    proc_title:'How we work,<br><em>step by step</em>',
    proc_sub:"From the first analysis to scale. No mystery and no fine print.",
    f1_t:"Audit", f1_p:"We analyze your clinic, your competitors and your star procedure. Free and in less than 48 hours.",
    f2_t:"Acquisition plan", f2_p:"Together we define the patient target, the budget and the procedure we will push first.",
    f3_t:"Attraction and qualification", f3_p:"We activate the channels where your patients already search and prioritize people with real intent to book. The accounts always stay in your name.",
    f4_t:"Booking and conversion", f4_p:"We walk every conversation to a confirmed consultation, with follow-up, reminders and scripts so more consultations end in performed procedures.",
    f5_t:"Measurement and scale", f5_p:"With the cost per patient validated, we increase investment and repeat what has already proven to work.",
    roi_title:'Think return,<br><em>not cost</em>',
    pq_title:'Is it right for <em>your clinic?</em>',
    plan_title:'Plans &amp; <em>pricing</em>', per_month:"/mo", p_ia:"AI visibility: monthly measurement",
    faq_title:'Frequently asked <em>questions</em>',
    faq11_q:"What is AI visibility and why does it matter?",
    faq11_a:"More and more patients ask assistants such as ChatGPT, Gemini or Perplexity, or see AI answers in Google, before choosing a clinic. AI visibility is how often your clinic appears in those answers and how it is described. We cannot guarantee a mention, because each platform decides on its own; what we do is measure it every month, fix the information AI reads about your clinic and show you the trend in the report.",
    aut_title:'Why most clinics<br><em>lose patients</em>',
    form_title:'Request your<br><em>free growth audit</em>',
    form_mail_note:"We opened your email with the message ready to send. If it does not open, write to us at contacto@vectamkt.com.",
    foot:"Growth system for aesthetic clinics and medical tourism · Bogotá · Medellín · Cali · Latin America"

  }
};

// ===================================================
// MOTOR DE TRADUCCIÓN ES / EN  (mismo mecanismo del sitio anterior: data-i18n / data-i18n-html)
// ===================================================
let lang = 'es';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reducedMQ = window.matchMedia('(prefers-reduced-motion: reduce)');
const reduced = () => reducedMQ.matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

// Divide un título en líneas (por <br>) y envuelve cada una para el reveal con máscara
function wrapLines(el) {
  const parts = el.innerHTML.split(/<br\s*\/?>/i);
  el.innerHTML = parts.map((p, i) => `<span class="ln"><span class="ln-in" style="--i:${i}">${p.trim()}</span></span>`).join('');
}

function fmtCount(el, v) {
  const dec = parseInt(el.dataset.dec || '0', 10);
  let s;
  if (el.hasAttribute('data-plain')) s = v.toFixed(dec);
  else s = new Intl.NumberFormat(lang === 'es' ? 'es-CO' : 'en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v);
  el.textContent = (el.dataset.pre || '') + s + (el.dataset.suf || '');
}

function setLang(l) {
  lang = l;
  const d = i18n[l];
  document.documentElement.lang = l;
  document.title = d.doc_title;

  $$('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (d[k] !== undefined) el.textContent = d[k]; });
  $$('[data-i18n-html]').forEach(el => {
    const k = el.dataset.i18nHtml;
    if (d[k] === undefined) return;
    el.innerHTML = d[k];
    if (el.hasAttribute('data-lines')) wrapLines(el);
  });
  $$('[data-i18n-aria]').forEach(el => { const k = el.dataset.i18nAria; if (d[k] !== undefined) el.setAttribute('aria-label', d[k]); });

  $('#langToggle').textContent = (l === 'es') ? 'EN' : 'ES';
  $$('[data-setlang]').forEach(b => b.setAttribute('aria-current', String(b.dataset.setlang === l)));
  $$('[data-count]').forEach(el => { if (el.dataset.state === 'done' || !el.dataset.state) fmtCount(el, parseFloat(el.dataset.count)); });
  setMenuLabel();

  const roiTicket = $('#roiTicket');
  if (roiTicket) roiTicket.dispatchEvent(new Event('input'));
}

$('#langToggle').addEventListener('click', () => setLang(lang === 'es' ? 'en' : 'es'));
$$('[data-setlang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.setlang)));

// ===== NAV — estado "scrolled" =====
(function initNavScroll() {
  const nav = $('#siteNav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 10);
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

// ===== NAVEGACIÓN MÓVIL =====
const menuToggle = $('#menuToggle');
const mobileMenu = $('#mobileMenu');
function setMenuLabel() {
  if (!menuToggle) return;
  const open = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-label', i18n[lang][open ? 'menu_close' : 'menu_open']);
}
(function initMobileMenu() {
  if (!menuToggle || !mobileMenu) return;
  const closeMenu = () => { menuToggle.setAttribute('aria-expanded', 'false'); mobileMenu.hidden = true; setMenuLabel(); };
  menuToggle.addEventListener('click', () => {
    const willOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(willOpen));
    mobileMenu.hidden = !willOpen;
    setMenuLabel();
  });
  $$('a', mobileMenu).forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1180) closeMenu(); }, { passive: true });
})();

// ===== SISTEMA VECTA — la pantalla del teléfono cambia con el scroll =====
(function initSystem() {
  const sys = $('#sysWrap');
  const steps = $$('.sys-step');
  const label = $('#sceneLabel');
  const desktop = window.matchMedia('(min-width: 901px)');
  if (!sys || !steps.length) return;
  let pending = false;

  function setScene(n) {
    const next = String(n);
    if (sys.dataset.scene === next && label.dataset.i18n === 'scene_l' + next) return;
    sys.dataset.scene = next;
    steps.forEach(s => s.classList.toggle('is-active', s.dataset.step === next));
    label.dataset.i18n = 'scene_l' + next;
    label.textContent = i18n[lang]['scene_l' + next];
  }
  function update() {
    pending = false;
    if (!desktop.matches) return;
    const mid = window.innerHeight * 0.5;
    let best = steps[0], bestD = Infinity;
    steps.forEach(s => {
      const r = s.getBoundingClientRect();
      const d = Math.abs(r.top + r.height / 2 - mid);
      if (d < bestD) { bestD = d; best = s; }
    });
    setScene(best.dataset.step);
  }
  const queue = () => { if (!pending) { pending = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue, { passive: true });
  update();
})();

// ===== TIMELINE: la línea se dibuja con el scroll =====
(function initTimeline() {
  const tl = $('#timeline');
  if (!tl) return;
  const items = $$('.tl-item', tl);
  let pending = false;
  function update() {
    pending = false;
    if (reduced()) { tl.style.setProperty('--p', 1); items.forEach(i => i.classList.add('on')); return; }
    const r = tl.getBoundingClientRect();
    const line = window.innerHeight * 0.62;
    tl.style.setProperty('--p', clamp((line - r.top) / r.height, 0, 1).toFixed(4));
    items.forEach(i => i.classList.toggle('on', i.getBoundingClientRect().top + 14 < line));
  }
  const queue = () => { if (!pending) { pending = true; requestAnimationFrame(update); } };
  window.addEventListener('scroll', queue, { passive: true });
  window.addEventListener('resize', queue, { passive: true });
  update();
})();

// ===== CALCULADORA DE RETORNO (misma lógica del sitio anterior) =====
(function initRoiCalculator() {
  const ticket = $('#roiTicket');
  const patients = $('#roiPatients');
  const investment = $('#roiInvestment');
  if (!ticket || !patients || !investment) return;

  const ticketOut = $('#roiTicketOut');
  const patientsOut = $('#roiPatientsOut');
  const investmentOut = $('#roiInvestmentOut');
  const revenueOut = $('#roiRevenueOut');
  const returnOut = $('#roiReturnOut');
  const balanceOut = $('#roiBalanceOut');

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
    balanceOut.style.color = balance >= 0 ? 'var(--jade-luz)' : 'var(--prata)';
    [ticket, patients, investment].forEach(paintRange);
  }
  [ticket, patients, investment].forEach(input => input.addEventListener('input', update));
  update();
})();

// ===== FAQ — acordeón (0.3s) =====
(function initFaq() {
  const qs = $$('.faq-q');
  const panel = q => q.parentElement.nextElementSibling;
  qs.forEach(q => { panel(q).inert = true; });
  qs.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      qs.forEach(other => {
        if (other !== btn) { other.setAttribute('aria-expanded', 'false'); panel(other).inert = true; }
      });
      btn.setAttribute('aria-expanded', String(!expanded));
      panel(btn).inert = expanded;
    });
  });
})();

// ===== FORMULARIO DE LEAD → WHATSAPP (comportamiento idéntico al sitio anterior) =====
(function initLeadForm() {
  const waNumber = String(WHATSAPP_NUMERO || '').replace(/\D/g, '');
  const waEnabled = waNumber.length > 0;

  // Sin número configurado: se oculta todo botón/enlace de WhatsApp
  if (!waEnabled) $$('[data-wa]').forEach(el => { el.hidden = true; });

  const waLink = $('#waDirectBtn');
  if (waLink && waEnabled) {
    const txt = encodeURIComponent('Hola, quiero solicitar el diagnóstico gratuito para mi clínica');
    waLink.href = `https://wa.me/${waNumber}?text=${txt}`;
  }

  const leadForm = $('#leadForm');
  if (!leadForm) return;
  const status = $('#formStatus');

  leadForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre   = $('#fNombre').value.trim();
    const whatsapp = $('#fWa').value.trim();
    const proc     = $('#fProc').value;

    let valid = true;
    ['fNombre', 'fWa', 'fProc'].forEach(id => $('#' + id).classList.remove('input-error'));
    $('#err-nombre').textContent = '';
    $('#err-wa').textContent = '';
    $('#err-proc').textContent = '';
    if (status) status.textContent = '';

    if (!nombre) {
      $('#fNombre').classList.add('input-error');
      $('#err-nombre').textContent = i18n[lang].err_nombre;
      valid = false;
    }
    const waClean = whatsapp.replace(/[\s\-\(\)]/g, '');
    if (!whatsapp || waClean.replace('+', '').length < 8) {
      $('#fWa').classList.add('input-error');
      $('#err-wa').textContent = i18n[lang].err_wa;
      valid = false;
    }
    if (!proc) {
      $('#fProc').classList.add('input-error');
      $('#err-proc').textContent = i18n[lang].err_proc;
      valid = false;
    }
    if (!valid) return;

    const msgES = `Hola ${BRAND_NAME}, soy ${nombre}. Mi WhatsApp es ${whatsapp}. El procedimiento principal de mi clínica es: ${proc}. Quiero solicitar el diagnóstico gratuito.`;
    const msgEN = `Hello ${BRAND_NAME}, I'm ${nombre}. My WhatsApp is ${whatsapp}. My clinic's main procedure is: ${proc}. I want to request the free growth audit.`;
    const msg = (lang === 'es') ? msgES : msgEN;

    if (waEnabled) {
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
    } else {
      // Respaldo mientras no haya número de WhatsApp: abre el correo con el mensaje listo
      const subject = encodeURIComponent(lang === 'es' ? 'Diagnóstico gratuito' : 'Free growth audit');
      window.location.href = `mailto:${EMAIL_CONTACTO}?subject=${subject}&body=${encodeURIComponent(msg)}`;
      if (status) status.textContent = i18n[lang].form_mail_note;
    }
  });
})();

// ===== REVELADOS AL ENTRAR EN PANTALLA =====
// El estado oculto (.rv) lo pone SOLO este script, y los elementos fuera del primer pantallazo
// se observan; si el JS falla, todo queda visible.
(function initReveal() {
  if (reduced()) return;
  const vh = window.innerHeight;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });

  $$('[data-fade]').forEach(el => {
    const sibs = $$(':scope > [data-fade]', el.parentElement);
    el.style.transitionDelay = Math.min(sibs.indexOf(el), 5) * 80 + 'ms';
  });

  $$('[data-lines], [data-fade], .eyebrow').forEach(el => {
    const r = el.getBoundingClientRect();
    el.classList.add('rv');
    if (r.top < vh && r.bottom > 0) {
      requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('in')));
    } else {
      io.observe(el);
    }
  });
})();

// ===== NÚMEROS CLAVE: cuentan una sola vez =====
(function initCounters() {
  const els = $$('[data-count]');
  if (!els.length) return;
  if (reduced()) { els.forEach(el => { el.dataset.state = 'done'; fmtCount(el, parseFloat(el.dataset.count)); }); return; }

  const ease = t => 1 - Math.pow(1 - t, 3);
  function run(el) {
    if (el.dataset.state === 'run' || el.dataset.state === 'done') return;
    el.dataset.state = 'run';
    const target = parseFloat(el.dataset.count);
    const t0 = performance.now();
    const dur = 1200;
    (function tick(now) {
      const p = clamp((now - t0) / dur, 0, 1);
      fmtCount(el, ease(p) * target);
      if (p < 1) requestAnimationFrame(tick);
      else { fmtCount(el, target); el.dataset.state = 'done'; }
    })(t0);
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.4 });
  els.forEach(el => {
    el.dataset.state = 'idle';
    fmtCount(el, 0);
    io.observe(el);
  });
})();

// ===== LUZ JADE QUE SIGUE AL PUNTERO EN LAS TARJETAS (sin tilt, sin escala) =====
if (finePointer) {
  document.addEventListener('pointermove', e => {
    const card = e.target.closest && e.target.closest('.card');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });
}

// ===== BOTONES: tirón magnético (máx. 4px) =====
if (finePointer) {
  $$('.btn').forEach(btn => {
    btn.addEventListener('pointermove', e => {
      if (reduced()) return;
      const r = btn.getBoundingClientRect();
      const dx = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2), -1, 1) * 4;
      const dy = clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2), -1, 1) * 4;
      btn.style.transform = `translate(${dx.toFixed(2)}px, ${dy.toFixed(2)}px)`;
    });
    btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
  });
}

// ===== HERO: campo vectorial (canvas) =====
(function initVectorField() {
  const cv = $('#vectorField');
  if (!cv || !cv.getContext) return;
  const ctx = cv.getContext('2d');
  const hero = cv.closest('.hero');
  const TARGET = -Math.PI / 4;          // arriba y a la derecha
  let W = 0, H = 0, lines = [], raf = 0, last = 0, start = performance.now(), visible = true;

  const norm = a => { while (a > Math.PI) a -= 2 * Math.PI; while (a < -Math.PI) a += 2 * Math.PI; return a; };

  function build() {
    const box = hero.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = box.width; H = box.height;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const step = W < 700 ? 56 : 46;
    lines = [];
    for (let y = -step; y < H + step; y += step) {
      for (let x = -step; x < W + step; x += step) {
        lines.push({
          x: x + (Math.random() - .5) * step * .7, y: y + (Math.random() - .5) * step * .7,
          diff: norm((Math.random() * 2 - 1) * Math.PI - TARGET),
          len: 12 + Math.random() * 16, alpha: .12 + Math.random() * .22,
          gold: Math.random() < .07, ph: Math.random() * 6.283, sp: .15 + Math.random() * .25, rate: .55 + Math.random() * .65
        });
      }
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1; ctx.lineCap = 'round';
    const prog = reduced() ? .93 : Math.min(.93, 1 - Math.exp(-t / 10));
    const wob = reduced() ? 0 : 1;
    for (const l of lines) {
      const k = Math.max(.04, 1 - prog * l.rate);
      const a = TARGET + l.diff * k + Math.sin(t * l.sp + l.ph) * .1 * wob;
      const c = Math.cos(a), s = Math.sin(a);
      const drift = Math.sin(t * .12 + l.ph) * 6 * wob;
      const cx = l.x + c * drift, cy = l.y + s * drift, h = l.len / 2;
      ctx.strokeStyle = l.gold ? `rgba(214,183,122,${l.alpha})` : `rgba(43,199,174,${l.alpha})`;
      ctx.beginPath(); ctx.moveTo(cx - c * h, cy - s * h); ctx.lineTo(cx + c * h, cy + s * h); ctx.stroke();
    }
  }

  function frame(now) {
    raf = 0;
    if (!visible || document.hidden || reduced()) return;
    raf = requestAnimationFrame(frame);
    if (now - last < 33) return;      // ~30 fps es suficiente para algo tan lento
    last = now;
    draw((now - start) / 1000);
  }
  function play() { if (!raf && visible && !document.hidden && !reduced()) raf = requestAnimationFrame(frame); }
  function stop() { if (raf) cancelAnimationFrame(raf); raf = 0; }

  build();
  if (reduced()) draw(100); else draw(0);
  play();

  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { build(); draw(reduced() ? 100 : (performance.now() - start) / 1000); }, 150); }, { passive: true });
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : play());
  new IntersectionObserver(es => { visible = es[0].isIntersecting; visible ? play() : stop(); }).observe(hero);
  reducedMQ.addEventListener && reducedMQ.addEventListener('change', () => { stop(); build(); draw(reduced() ? 100 : 0); play(); });
})();

// ===== HERO: video de fondo (opcional; si el archivo no existe, se oculta sin ruido) =====
(function initHeroVideo() {
  const v = $('#heroVideo');
  if (!v) return;
  const saveData = navigator.connection && navigator.connection.saveData;
  if (reduced() || saveData) { v.remove(); return; }
  function load() {
    v.addEventListener('error', () => v.remove(), { once: true });
    v.addEventListener('canplay', () => { v.classList.add('ready'); const p = v.play(); if (p && p.catch) p.catch(() => {}); }, { once: true });
    v.poster = v.dataset.poster;
    v.src = v.dataset.src;
    v.load();
  }
  const go = () => setTimeout(load, 250);          // después del primer pintado
  if (document.readyState === 'complete') go(); else window.addEventListener('load', go, { once: true });
})();

// ===== ARRANQUE =====
(function init() {
  const y = $('#year');
  if (y) y.textContent = String(new Date().getFullYear());
  const wanted = new URLSearchParams(window.location.search).get('lang');
  setLang(wanted === 'en' ? 'en' : 'es');
})();
