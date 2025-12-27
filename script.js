// DATA: Lista completa de ramos según tu malla
// req: Arreglo de códigos de requisitos. 
// "SEM_X_APPROVED" es un código especial para requisitos de semestre completo.

const subjectsData = [
    // --- 1er Año ---
    // Semestre 1
    { id: 'APU111', sem: 1, name: 'Teoría de la Organización', req: [], msg: '¡Primer paso logrado! Ya entiendes cómo se estructuran las organizaciones: buen comienzo 💡' },
    { id: 'APU112', sem: 1, name: 'Fundamentos de Ciencia Política', req: [], msg: 'Aprobado 🎉 Ahora tienes bases sólidas para comprender el poder y el Estado.' },
    { id: 'APU113', sem: 1, name: 'Nociones Generales de Derecho', req: [], msg: '¡Vamos! El lenguaje jurídico ya no es un misterio para ti ⚖️' },
    { id: 'APU114', sem: 1, name: 'Razonamiento Lógico Matemático', req: [], msg: 'Desafío superado 🧠💥 Tu lógica está más fuerte que nunca.' },
    { id: 'APU115', sem: 1, name: 'Introducción a la Formación Profesional', req: [], msg: '¡Gran logro! Estás oficialmente en camino a convertirte en profesional 👏' },
    { id: 'APU116', sem: 1, name: 'Competencias Lectoras-Escritoras', req: [], msg: 'Aprobado ✍️📖: comunicar bien también es una gran herramienta de poder.' },

    // Semestre 2
    { id: 'APU121', sem: 2, name: 'Teoría de la Administración', req: ['APU111'], msg: '¡Excelente! Ya manejas conceptos clave para gestionar con criterio 🔑' },
    { id: 'APU122', sem: 2, name: 'Sociología', req: [], msg: 'Aprobado 🙌 Ahora miras la sociedad con otros ojos.' },
    { id: 'APU123', sem: 2, name: 'Derecho Constitucional', req: ['APU113'], msg: '¡Logrado! La base del orden constitucional ya es parte de tu formación 🇨🇱' },
    { id: 'APU124', sem: 2, name: 'Matemática para la Gestión', req: ['APU114'], msg: '¡Sí se pudo! Los números también juegan a tu favor 📊' },
    { id: 'APU125', sem: 2, name: 'Historia Política e Inst. de Chile', req: [], msg: 'Aprobado 🇨🇱 Conocer el pasado fortalece tus decisiones futuras.' },
    { id: 'APU126', sem: 2, name: 'TICs Aplicadas a la Gestión', req: [], msg: '¡Bien ahí! Tecnología y gestión ahora van de la mano 💻✨' },

    // --- 2º Año ---
    // Semestre 3
    { id: 'APU211', sem: 3, name: 'Administración Pública Chilena', req: ['APU121'], msg: '¡Gran avance! Ya comprendes cómo funciona el Estado por dentro 🏛️' },
    { id: 'APU212', sem: 3, name: 'Ideas e Instituciones Políticas', req: ['APU112'], msg: 'Aprobado 💭 Las ideas que mueven al mundo ya no te son ajenas.' },
    { id: 'APU213', sem: 3, name: 'Derecho Administrativo I', req: ['APU123'], msg: '¡Vamos! El derecho público empieza a tomar forma ⚖️' },
    { id: 'APU214', sem: 3, name: 'Estadística', req: ['APU124'], msg: '¡Logrado! Ahora los datos hablan contigo 📈' },
    { id: 'APU215', sem: 3, name: 'Gestión de Personas I', req: ['APU121'], msg: 'Aprobado 🤝 Liderar también se aprende, y tú lo estás logrando.' },
    { id: 'APU216', sem: 3, name: 'Inglés I', req: [], msg: 'Nice job! 🌍 Primer paso para ampliar tus fronteras.' },

    // Semestre 4
    { id: 'APU221', sem: 4, name: 'Administración de Bienes y Servicios', req: ['APU211'], msg: '¡Excelente! Gestionar recursos públicos ya es parte de tu skillset 🧩' },
    { id: 'APU222', sem: 4, name: 'Comunicación Pública', req: ['APU211'], msg: 'Aprobado 🗣️ Comunicar bien también es gobernar mejor.' },
    { id: 'APU223', sem: 4, name: 'Derecho Administrativo II', req: ['APU213'], msg: '¡Nivel desbloqueado! Tu dominio del derecho administrativo crece 💪' },
    { id: 'APU224', sem: 4, name: 'Microeconomía', req: ['APU214'], msg: '¡Bien hecho! Ahora entiendes decisiones desde la lógica económica 💰' },
    { id: 'APU225', sem: 4, name: 'Gestión de Personas II', req: ['APU215'], msg: 'Aprobado 👏 Liderazgo y gestión humana en ascenso.' },
    { id: 'APU226', sem: 4, name: 'Inglés II', req: ['APU216'], msg: 'Great progress! 🚀 Sigues sumando herramientas clave.' },

    // --- 3er Año ---
    // Semestre 5
    { id: 'APU311', sem: 5, name: 'Administración Financiera del Estado', req: ['APU224', 'APU223'], msg: '¡Tremendo logro! Las finanzas públicas ya no te asustan 💼' },
    { id: 'APU312', sem: 5, name: 'Contabilidad General', req: ['APU124'], msg: 'Aprobado 📘 Paso firme hacia el control y la gestión eficiente.' },
    { id: 'APU313', sem: 5, name: 'Régimen Laboral en el Sector Público', req: ['APU225'], msg: '¡Bien ahí! Conoces derechos y deberes en el servicio público.' },
    { id: 'APU314', sem: 5, name: 'Macroeconomía', req: ['APU224'], msg: 'Aprobado 🌎 Ahora ves la economía a gran escala.' },
    { id: 'APU315', sem: 5, name: 'Metodología de la Inv. Cuantitativa', req: ['APU214'], msg: '¡Logrado! Investigar con rigor también es una fortaleza 📊' },
    { id: 'APU316', sem: 5, name: 'Inglés III', req: ['APU226'], msg: 'Excellent! 🌟 Tu nivel sigue subiendo.' },

    // Semestre 6
    { id: 'APU321', sem: 6, name: 'Finanzas Públicas', req: ['APU311'], msg: 'Aprobado 💰 Cada vez más cerca de dominar la gestión estatal.' },
    { id: 'APU322', sem: 6, name: 'Contabilidad General de la Nación', req: ['APU312', 'APU311'], msg: '¡Gran paso! Comprendes cómo se ordenan las cuentas del país 📒' },
    { id: 'APU323', sem: 6, name: 'Transparencia y Probidad Administrativa', req: ['APU313'], msg: 'Aprobado ✨ Ética y servicio público van contigo.' },
    { id: 'APU324', sem: 6, name: 'Economía e Integración Internacional', req: ['APU314'], msg: '¡Excelente! Ahora piensas el Estado en un mundo globalizado 🌍' },
    { id: 'APU325', sem: 6, name: 'Metodología de la Inv. Cualitativa', req: ['APU315'], msg: 'Aprobado 🔍 Sabes investigar realidades más allá de los números.' },
    { id: 'APU326', sem: 6, name: 'Taller de Modelos de Toma de Decisión Pública', req: ['SEM_5_APPROVED'], msg: '¡Logrado! Decidir con criterio también se entrena 🧠' },

    // --- 4º Año ---
    // Semestre 7
    { id: 'APU411', sem: 7, name: 'Control de la Gestión en el Sector Público', req: ['APU323'], msg: 'Aprobado ✔️ Gestionar con eficiencia ya es parte de ti.' },
    { id: 'APU412', sem: 7, name: 'Sistemas de Información', req: ['APU126', 'APU222'], msg: '¡Bien hecho! La información es poder, y tú sabes usarla 💾' },
    { id: 'APU413', sem: 7, name: 'Derecho Internacional Público', req: ['APU223'], msg: 'Aprobado 🌐 El derecho traspasa fronteras contigo.' },
    { id: 'APU414', sem: 7, name: 'Práctica Profesional I', req: ['SEM_6_APPROVED'], msg: '¡Felicidades! La teoría empieza a hacerse realidad 👏' },
    { id: 'APU415', sem: 7, name: 'Teoría y Método de la Fiscalización', req: ['APU323'], msg: 'Aprobado 🔎 Fiscalizar también es proteger lo público.' },
    { id: 'APU416', sem: 7, name: 'Taller de Integración Sello UV I', req: ['APU326'], msg: '¡Bien ahí! Tu sello profesional empieza a consolidarse 💙' },

    // Semestre 8
    { id: 'APU421', sem: 8, name: 'Análisis Financiero', req: ['APU322'], msg: 'Aprobado 📈 Cada vez más sólido en gestión financiera.' },
    { id: 'APU422', sem: 8, name: 'Relaciones Internacionales', req: ['APU413'], msg: '¡Excelente! El mundo también es tu campo de análisis 🌎' },
    { id: 'APU423', sem: 8, name: 'Gerencia Pública', req: ['APU411'], msg: 'Aprobado 👔 Liderar lo público ya es parte de tu perfil.' },
    { id: 'APU424', sem: 8, name: 'Gobierno y Administración Regional', req: ['APU322'], msg: '¡Logrado! Comprendes el territorio y su gestión 🗺️' },
    { id: 'APU425', sem: 8, name: 'Administración Municipal', req: ['APU415'], msg: 'Aprobado 🏘️ Lo local también importa, y tú lo sabes.' },
    { id: 'APU426', sem: 8, name: 'Taller de Integración Sello UV II', req: ['APU416'], msg: '¡Gran avance! Tu identidad profesional se fortalece 💪' },

    // --- 5º Año ---
    // Semestre 9
    { id: 'APU511', sem: 9, name: 'Políticas Públicas', req: ['APU423'], msg: 'Aprobado 🎯 Diseñar soluciones ya es parte de tu camino.' },
    { id: 'APU512', sem: 9, name: 'Taller de Negociación y Resolución', req: ['APU423'], msg: '¡Excelente! Dialogar y resolver también es gobernar 🤝' },
    { id: 'APU513', sem: 9, name: 'Práctica Profesional II', req: ['APU414'], msg: '¡Felicidades! Ya estás actuando como profesional 👏🔥' },
    { id: 'APU514', sem: 9, name: 'Taller de Integración Ciclo Profesional', req: ['APU426'], msg: 'Aprobado 🧩 Todo empieza a encajar.' },
    { id: 'APU515', sem: 9, name: 'Diseño y Formulación de Proyectos', req: ['APU421'], msg: '¡Logrado! Transformar ideas en proyectos ya es tu fortaleza 🚀' },
    { id: 'APU516', sem: 9, name: 'Taller de Integración Sello UV III', req: ['APU426'], msg: 'Aprobado 💙 Tu sello profesional está casi completo.' },

    // Semestre 10
    { id: 'APU521', sem: 10, name: 'Seminario de Título', req: ['SEM_9_APPROVED'], msg: '¡Histórico! Estás cerrando una etapa enorme 🎓✨' },
    { id: 'APU522', sem: 10, name: 'Taller de Investigación Aplicada', req: ['APU325'], msg: 'Aprobado 🔬 Tu conocimiento ahora impacta la realidad.' },
    { id: 'APU523', sem: 10, name: 'Asignatura Electiva', req: [], msg: '¡Bien hecho! Elegir y cumplir también es crecer 🙌' }
];

// Estado global
let approvedSubjects = new Set();

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    renderMalla();
    updateProgress();
    
    // Configurar cierre del modal
    document.querySelector('.close-btn').addEventListener('click', closeModal);
    window.onclick = function(event) {
        if (event.target == document.getElementById('modal-motivacional')) {
            closeModal();
        }
    }
});

function loadState() {
    const saved = localStorage.getItem('apu_approved');
    if (saved) {
        approvedSubjects = new Set(JSON.parse(saved));
    }
}

function saveState() {
    localStorage.setItem('apu_approved', JSON.stringify([...approvedSubjects]));
}

// Lógica de validación de Semestres Completos (Sem 1-5, Sem 1-6, etc.)
function isSemesterFullyApproved(semesterLimit) {
    // Filtramos los ramos que pertenecen a semestres <= semesterLimit
    const requiredSubjects = subjectsData.filter(s => s.sem <= semesterLimit);
    // Verificamos si TODOS están en el set de aprobados
    return requiredSubjects.every(s => approvedSubjects.has(s.id));
}

// Verificar si un ramo está desbloqueado
function isUnlocked(subject) {
    if (subject.req.length === 0) return true;

    for (let reqId of subject.req) {
        // Chequeos especiales de semestre
        if (reqId === 'SEM_5_APPROVED') {
            if (!isSemesterFullyApproved(5)) return false;
        } 
        else if (reqId === 'SEM_6_APPROVED') {
            if (!isSemesterFullyApproved(6)) return false;
        }
        else if (reqId === 'SEM_9_APPROVED') {
            if (!isSemesterFullyApproved(9)) return false;
        }
        // Chequeo normal de asignatura
        else if (!approvedSubjects.has(reqId)) {
            return false;
        }
    }
    return true;
}

// Obtener nombres de requisitos faltantes
function getMissingRequirements(subject) {
    let missing = [];
    
    subject.req.forEach(reqId => {
        if (reqId === 'SEM_5_APPROVED') {
            if (!isSemesterFullyApproved(5)) missing.push("Todo el V Semestre (1º a 5º sem)");
        } else if (reqId === 'SEM_6_APPROVED') {
            if (!isSemesterFullyApproved(6)) missing.push("Todo el VI Semestre (1º a 6º sem)");
        } else if (reqId === 'SEM_9_APPROVED') {
            if (!isSemesterFullyApproved(9)) missing.push("Todo el IX Semestre (1º a 9º sem)");
        } else {
            if (!approvedSubjects.has(reqId)) {
                const reqSub = subjectsData.find(s => s.id === reqId);
                missing.push(reqSub ? `${reqId} ${reqSub.name}` : reqId);
            }
        }
    });
    return missing;
}

function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';

    // Agrupar por semestres (1 al 10)
    for (let i = 1; i <= 10; i++) {
        const semesterCol = document.createElement('div');
        semesterCol.className = 'semester-column';
        
        const title = document.createElement('div');
        title.className = 'semester-title';
        title.innerText = `Semestre ${i}`;
        semesterCol.appendChild(title);

        const subjectsInSem = subjectsData.filter(s => s.sem === i);

        subjectsInSem.forEach(subject => {
            const card = document.createElement('div');
            card.className = 'subject-card';
            card.id = `card-${subject.id}`;
            
            // Renderizado inicial de estado
            if (approvedSubjects.has(subject.id)) {
                card.classList.add('approved');
            } else if (!isUnlocked(subject)) {
                card.classList.add('blocked');
            }

            card.innerHTML = `
                <span class="subject-code">${subject.id}</span>
                <span class="subject-name">${subject.name}</span>
            `;

            card.onclick = () => toggleSubject(subject);

            semesterCol.appendChild(card);
        });

        container.appendChild(semesterCol);
    }
}

function toggleSubject(subject) {
    // Si ya está aprobado, lo desmarcamos
    if (approvedSubjects.has(subject.id)) {
        approvedSubjects.delete(subject.id);
        saveState();
        renderMalla(); // Re-renderizar para actualizar bloqueos de siguientes ramos
        updateProgress();
        return;
    }

    // Si no está aprobado, verificamos requisitos
    if (isUnlocked(subject)) {
        approvedSubjects.add(subject.id);
        saveState();
        renderMalla();
        updateProgress();
        showModal(subject.msg);
    } else {
        const missing = getMissingRequirements(subject);
        alert(`🔒 Ramo bloqueado.\nDebes aprobar:\n- ${missing.join('\n- ')}`);
    }
}

function showModal(message) {
    const modal = document.getElementById('modal-motivacional');
    const msgElement = document.getElementById('modal-message');
    msgElement.innerText = message;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById('modal-motivacional').style.display = "none";
}

function updateProgress() {
    const total = subjectsData.length;
    const approved = approvedSubjects.size;
    const percentage = Math.round((approved / total) * 100);
    document.getElementById('progress-text').innerText = `${percentage}%`;
}

function resetProgress() {
    if(confirm("¿Estás seguro de que quieres borrar todo tu progreso?")) {
        approvedSubjects.clear();
        saveState();
        renderMalla();
        updateProgress();
    }
}
