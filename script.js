/* script.js links index.html and styles.css */
(function () {
  var root = document.documentElement;

  // index.html -> script.js: switch the page from "no-js" to "js"
  root.classList.remove("no-js");
  root.classList.add("js");

  // script.js -> styles.css: load the stylesheet if index.html did not include it
  if (!document.querySelector('link[href$="styles.css"]')) {
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "styles.css";
    document.head.appendChild(l);
  }

  // styles.css -> script.js: read a value that styles.css defines
  window.addEventListener("load", function () {
    var v = getComputedStyle(root).getPropertyValue("--linked").trim();
    root.setAttribute("data-linked", v ? "true" : "false");
    if (!v) {
      console.warn("styles.css was not loaded. Check the file name and folder.");
    }
  });

  // script.js -> index.html: fill in the footer year
  var y = document.getElementById("year");
  if (y) {
    y.textContent = new Date().getFullYear();
  }
})();

(function(){
var D=[
  [
    "Common cold",
    "c",
    "cold runny nose sneezing sore throat",
    "A mild viral infection of the nose and throat.",
    "Runny or blocked nose, sneezing, mild sore throat, cough.",
    "Rest, fluids, warm salt-water gargles, steam. Antibiotics don’t work on colds.",
    "Fever lasts over 3 days, breathing trouble, or symptoms get worse after a week.",
    "General physician"
  ],
  [
    "Flu (influenza)",
    "c",
    "flu influenza fever body ache",
    "A viral infection that hits harder than a cold.",
    "Sudden fever, body aches, chills, tiredness, dry cough.",
    "Rest, fluids, paracetamol for fever as per the label. Stay home to avoid spreading it.",
    "Breathing trouble, chest pain, confusion, or you are pregnant, elderly, or have a long-term illness.",
    "General physician"
  ],
  [
    "Fever",
    "c",
    "fever temperature high temperature",
    "A symptom, not a disease. It signals the body is fighting something.",
    "Raised temperature, sweating, chills, tiredness.",
    "Rest, fluids, light clothing, paracetamol as per the label.",
    "Fever over 3 days, over 103°F (39.4°C), in a baby under 3 months, or with rash, stiff neck, or severe headache. In dengue and malaria areas, get tested early.",
    "General physician"
  ],
  [
    "Cough",
    "c",
    "cough dry cough wet cough",
    "A reflex that clears the airways.",
    "Dry or phlegm cough, throat irritation.",
    "Warm fluids, honey for adults and children over 1 year, avoid smoke.",
    "Cough over 3 weeks, blood in phlegm, breathlessness, or weight loss.",
    "General physician or pulmonologist"
  ],
  [
    "Sore throat",
    "c",
    "sore throat tonsils pain swallowing",
    "Pain in the throat, usually viral.",
    "Pain when swallowing, scratchy throat, mild fever.",
    "Warm salt-water gargles, fluids, rest.",
    "Can’t swallow, drooling, difficulty breathing, or lasts over a week.",
    "General physician or ENT"
  ],
  [
    "Headache and migraine",
    "c",
    "headache migraine head pain",
    "Common pain with many causes: tension, dehydration, migraine.",
    "Dull ache or throbbing, sometimes with nausea and light sensitivity.",
    "Water, rest in a dark quiet room, regular sleep and meals.",
    "Sudden worst-ever headache, headache after a head injury, with fever and stiff neck, weakness, or vision loss. This is an emergency.",
    "Neurologist"
  ],
  [
    "Diarrhoea and vomiting",
    "c",
    "diarrhoea diarrhea loose motion vomiting stomach upset gastro",
    "Usually an infection or food poisoning.",
    "Loose stools, cramps, vomiting.",
    "ORS in small, frequent sips, continue light food. Wash hands well.",
    "Blood in stool, signs of dehydration (very dry mouth, little urine, dizziness), lasts over 2 days, or in babies and elderly.",
    "General physician"
  ],
  [
    "Acidity and heartburn",
    "c",
    "acidity gerd heartburn acid reflux gas",
    "Stomach acid flowing back into the food pipe.",
    "Burning in the chest or throat after eating, sour taste.",
    "Smaller meals, avoid lying down after eating, limit spicy, fried food and tea or coffee.",
    "Pain with sweating or arm pain (could be a heart attack), trouble swallowing, black stools, or weight loss.",
    "Gastroenterologist"
  ],
  [
    "Constipation",
    "c",
    "constipation hard stool bowel",
    "Infrequent or hard stools.",
    "Fewer than 3 stools a week, straining.",
    "Fibre, water, walking, regular toilet routine.",
    "Blood in stool, severe pain, unexplained weight loss, or lasts over 3 weeks.",
    "General physician"
  ],
  [
    "Urinary tract infection (UTI)",
    "c",
    "uti urine infection burning urination",
    "A bacterial infection of the bladder or urinary tract.",
    "Burning urine, frequent urge, cloudy or smelly urine.",
    "Drink water. Antibiotics are usually needed, so see a doctor.",
    "Fever, back or side pain, blood in urine, pregnancy, or in men and children.",
    "General physician or urologist"
  ],
  [
    "Allergic rhinitis",
    "c",
    "allergy sneezing dust pollen itchy eyes",
    "The nose reacting to dust, pollen or pets.",
    "Sneezing, itchy watery eyes, blocked nose.",
    "Avoid triggers, clean bedding, saline rinse.",
    "Wheezing, breathlessness, or symptoms that disturb sleep for weeks.",
    "General physician or ENT"
  ],
  [
    "Anaemia",
    "c",
    "anaemia anemia low hemoglobin tired pale iron",
    "Too few healthy red blood cells, often from low iron, B12 or folate.",
    "Tiredness, pale skin, breathlessness, dizziness.",
    "Iron-rich foods with vitamin C. Take iron tablets only after a blood test.",
    "Any of these symptoms, heavy periods, or blood in stool. A blood test finds the cause.",
    "General physician"
  ],
  [
    "Diabetes",
    "c",
    "diabetes sugar blood sugar thirst urination",
    "High blood sugar over a long time. It needs lifelong medical care.",
    "Increased thirst and urination, tiredness, slow-healing wounds, weight change.",
    "Balanced diet, daily walking, take medicines as prescribed, check sugar regularly.",
    "Get tested if you have symptoms or risk factors. Urgent: vomiting, deep fast breathing, confusion.",
    "Endocrinologist or physician"
  ],
  [
    "High blood pressure",
    "c",
    "blood pressure hypertension bp",
    "Often has no symptoms, but raises the risk of heart attack and stroke.",
    "Usually none. Sometimes headache or dizziness.",
    "Less salt, exercise, no smoking, healthy weight, regular BP checks, medicines if prescribed.",
    "Reading often above 140/90, or 180/120 with headache or chest pain (emergency).",
    "Cardiologist or physician"
  ],
  [
    "Back pain",
    "c",
    "back pain lower back spine",
    "Usually from muscle strain or posture.",
    "Ache in lower back, stiffness.",
    "Stay gently active, avoid long bed rest, warm compress.",
    "Numbness, leg weakness, loss of bladder or bowel control (emergency), or pain after a fall.",
    "Orthopaedic doctor"
  ],
  [
    "Heart attack",
    "s",
    "heart attack chest pain cardiac angina arm pain",
    "Blocked blood flow to the heart. Every minute counts.",
    "Chest pressure or pain, pain in arm, jaw or back, sweating, breathlessness, nausea.",
    "Call 112 or 108 now. Sit down and stay calm. Don’t drive yourself. If a doctor has told you to, chew one aspirin.",
    "Always. Even if pain eases.",
    "Cardiologist"
  ],
  [
    "Stroke",
    "s",
    "stroke face droop arm weakness slurred speech paralysis",
    "Blood flow to the brain is blocked or a vessel bleeds.",
    "Face drooping, arm weakness, slurred speech, sudden confusion, vision loss, severe headache.",
    "Call 112 or 108 now and note the time symptoms began. Don’t give food, drink or medicine.",
    "Always. Treatment works best within the first hours.",
    "Neurologist"
  ],
  [
    "Severe breathing trouble or asthma attack",
    "s",
    "asthma breathless wheezing cant breathe",
    "The airways narrow and air can’t move easily.",
    "Struggling to breathe, wheezing, can’t speak full sentences, blue lips.",
    "Sit upright, use the reliever inhaler as prescribed, and call 112 or 108 if no quick relief.",
    "Always if it’s severe or not improving.",
    "Pulmonologist"
  ],
  [
    "Severe allergic reaction (anaphylaxis)",
    "s",
    "anaphylaxis allergy swelling face hives throat",
    "A sudden, life-threatening allergic reaction.",
    "Swelling of lips, face or throat, hives, wheeze, dizziness or fainting.",
    "Call 112 or 108 now. Use an adrenaline auto-injector if prescribed. Lie down with legs raised.",
    "Always.",
    "Emergency care, then an allergist"
  ],
  [
    "Dengue",
    "s",
    "dengue mosquito fever platelets rash joint pain",
    "A mosquito-borne viral fever. Most recover, but some become severe.",
    "High fever, severe headache, pain behind the eyes, muscle and joint pain, rash.",
    "See a doctor for a test. Rest and fluids. Avoid ibuprofen and aspirin.",
    "Go to hospital now for bleeding, severe stomach pain, repeated vomiting, drowsiness, or cold clammy skin.",
    "General physician or physician"
  ],
  [
    "Malaria",
    "s",
    "malaria mosquito fever chills shivering",
    "A parasite spread by mosquitoes. It needs prompt treatment.",
    "Fever with chills and sweating, headache, vomiting.",
    "Get a blood test promptly. Don’t self-medicate.",
    "Confusion, fits, yellow eyes, or breathing trouble means go to hospital now.",
    "General physician"
  ],
  [
    "Typhoid",
    "s",
    "typhoid enteric fever prolonged fever",
    "A bacterial infection from contaminated food or water.",
    "Fever lasting several days, weakness, stomach pain, constipation or diarrhoea.",
    "See a doctor for testing and antibiotics. Drink safe water.",
    "Severe abdominal pain, confusion, or blood in stool.",
    "General physician"
  ],
  [
    "Tuberculosis (TB)",
    "s",
    "tb tuberculosis cough weight loss night sweats",
    "A bacterial infection, mainly of the lungs. It is curable with a full course of treatment.",
    "Cough over 2 weeks, fever, night sweats, weight loss, blood in phlegm.",
    "Get tested. TB diagnosis and treatment are free under the national programme.",
    "Any cough over 2 weeks.",
    "Pulmonologist or physician"
  ],
  [
    "Pneumonia",
    "s",
    "pneumonia lung infection chest infection",
    "An infection that inflames the lungs.",
    "Fever, cough with phlegm, fast breathing, chest pain.",
    "See a doctor the same day. Children, elderly and people with long illnesses are at higher risk.",
    "Breathlessness, blue lips, or confusion means go to hospital now.",
    "Pulmonologist or physician"
  ],
  [
    "Cancer: warning signs",
    "s",
    "cancer lump tumour unexplained weight loss bleeding",
    "Many cancers are treatable when found early. These signs don’t always mean cancer, but need checking.",
    "A lump, a sore that won’t heal, unusual bleeding, long-lasting cough or hoarseness, unexplained weight loss, change in a mole.",
    "Don’t wait. Book a check-up and ask about screening for your age.",
    "Any sign above lasting more than 2 to 3 weeks.",
    "Physician first, then an oncologist. Get a second opinion."
  ],
  [
    "Sepsis",
    "s",
    "sepsis blood infection shock",
    "The body’s extreme response to an infection. It is life-threatening.",
    "Fever or very low temperature, fast heartbeat, fast breathing, confusion, very weak.",
    "Go to hospital immediately or call 112 or 108.",
    "Always.",
    "Emergency care"
  ],
  [
    "Meningitis",
    "s",
    "meningitis stiff neck brain fever",
    "Inflammation around the brain and spinal cord.",
    "Fever, severe headache, stiff neck, vomiting, light sensitivity, drowsiness, rash.",
    "Go to hospital immediately.",
    "Always.",
    "Emergency care"
  ],
  [
    "Appendicitis",
    "s",
    "appendicitis appendix lower right stomach pain",
    "Inflamed appendix. It may burst without surgery.",
    "Pain starting near the navel and moving to the lower right, fever, vomiting, loss of appetite.",
    "Go to hospital now. Don’t eat or take painkillers first.",
    "Always.",
    "Surgeon"
  ]
];
var q=document.getElementById("q"),list=document.getElementById("list"),cnt=document.getElementById("count"),chips=document.getElementById("chips"),cat="all";
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function field(lbl,txt,cls){var p=el("p",cls);p.appendChild(el("b",null,lbl));p.appendChild(document.createTextNode(txt));return p}
function draw(){
  var s=q.value.trim().toLowerCase(),words=s.split(/\s+/).filter(Boolean),n=0;list.innerHTML="";
  D.forEach(function(d){
    if(cat!=="all"&&d[1]!==cat)return;
    var hay=(d[0]+" "+d[2]+" "+d[4]).toLowerCase();
    if(!words.every(function(w){return hay.indexOf(w)>-1}))return;
    n++;
    var det=el("details","item"+(d[1]==="s"?" serious":""));
    var sm=el("summary");sm.appendChild(el("span",null,d[0]));sm.appendChild(el("span","tag",d[1]==="s"?"Serious: get medical care":"Common"));
    det.appendChild(sm);
    var b=el("div","body");
    b.appendChild(field("About",d[3]));
    b.appendChild(field("Symptoms",d[4]));
    b.appendChild(field(d[1]==="s"?"What to do now":"What helps",d[5],d[1]==="s"?"act":""));
    b.appendChild(field("See a doctor if",d[6]));
    b.appendChild(field("Which doctor",d[7]));
    det.appendChild(b);list.appendChild(det);
    if(words.length&&n===1)det.open=true;
  });
  cnt.textContent=n?n+" result"+(n>1?"s":""):"";
  if(!n){var m=el("div","emerg");m.appendChild(el("p",null,"No match. Try another word, like a symptom (fever, cough, pain)."));
    m.appendChild(el("p",null,"If your problem isn’t listed, that doesn’t mean it’s minor. See a doctor, or book a free tele-consult on eSanjeevani."));list.appendChild(m)}
}
[["all","All"],["c","Common conditions"],["s","Serious: get care"]].forEach(function(c){
  var b=el("button","chip",c[1]);b.setAttribute("aria-pressed",c[0]===cat);
  b.onclick=function(){cat=c[0];[].forEach.call(chips.children,function(x){x.setAttribute("aria-pressed",x===b)});draw()};
  chips.appendChild(b)});
q.addEventListener("input",draw);draw();
var root=document.documentElement,tb=document.getElementById("themeBtn");
function isDark(){var t=root.getAttribute("data-theme");return t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches}
function label(){var d=isDark();tb.textContent=d?"Light mode":"Dark mode";tb.setAttribute("aria-label",d?"Switch to light mode":"Switch to dark mode")}
try{var s=localStorage.getItem("theme");if(s==="light"||s==="dark")root.setAttribute("data-theme",s)}catch(e){}
tb.addEventListener("click",function(){var n=isDark()?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem("theme",n)}catch(e){}label()});
label();
})();
