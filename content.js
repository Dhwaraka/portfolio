/* ============================================================
   CONTENT.JS  —  This is the only file you need to edit.
   ============================================================

   How to use this file:

   • Text goes inside quotes:  "like this"
   • To italicize a word in accent color, wrap it in <em>:
       "High-Pressure Hydrogen <em>Dispensing</em> Enclosure"
   • Images go in the images/ folder. Reference them like:
       "images/dispenser-1.jpg"
   • Lists are wrapped in square brackets [ ]
   • Each item ends with a comma  ,
   • Be careful not to delete the commas, brackets, or curly braces!

   If something looks broken after editing, you probably:
   - Forgot a comma
   - Deleted a quote, bracket, or brace
   - Misspelled an image filename

   ============================================================ */

const content = {

  /* -------- HERO (top of page) -------- */
  hero: {
    name: "Dhwarakesh",
    nameAccent: "Vandavasi&nbsp;Balaji",  // shown in italic accent color
    tagline: "Designing hardware that survives the field.",
    intro: "I take electro-mechanical systems from <strong>sketch to production release</strong> &mdash; Two years of <strong>SolidWorks, GD&amp;T, FEA, and shop-floor problem solving</strong> at One H2, plus a personal portfolio of fabricated objects that keep my hands honest.",
    meta: [
      { label: "Discipline", value: "Mechanical Product Engineer" },
      { label: "Specialization", value: "Electro-Mechanical Systems" },
      { label: "Experience", value: "2+ Years · Concept → Production" },
      { label: "Status", value: "Open to opportunities · US relocation", accent: true },
    ],
    annotation: "DVB / PORTFOLIO ",
  },

  /* -------- ABOUT SECTION -------- */
  about: {
    title: "A <em>generalist</em> mechanical engineer.",
    tagline: "Trained in industrial systems, fluent on the shop floor, methodical at the drawing board.",
    quote: "I like the full loop: <em>sketch &rarr; CAD &rarr; build &rarr; test &rarr; release.</em> If a design fails on the floor, I want to be there when it does.",
    paragraphs: [
      "Most of my professional work has been at <strong>One H2</strong> in Clover, South Carolina, where I led mechanical design across four electro-mechanical systems spanning the hydrogen value chain &mdash; high-pressure dispensing, ATR reformer packaging, electrolyzer integration, and combustion validation skids. The portfolio is roughly $1.2M of deployed hardware on 2,000+ line BOMs.",
      "I&rsquo;m equally interested in the small stuff. Off the clock I design and <strong>3D-print</strong> everyday objects &mdash; macro keyboards, cable organizers, walkie-talkie mounts &mdash; mostly to keep iterating on tolerance, material selection, and the gap between a drawing and a part that actually works.",
      "M.S. Mechanical Engineering, Arizona State University.", "B.E. Mechanical Engineering, Anna University.", 
    ],
  },

  /* -------- STAT BOXES (4 tiles) -------- */
  stats: [
    { num: "$1.2", unit: "M+", label: "Hardware portfolio<br>shipped to field" },
    { num: "2000", unit: "+", label: "Line Item BOM <br> per product" },
    { num: "25", unit: "+", label: "CAD models &amp; GD&amp;T<br>drawing packages released" },
    { num: "40", unit: "%", label: "NOx emissions below<br>CSA certification limit" },
  ],

  /* -------- SELECTED WORK PROJECTS --------
     Each project shows an image slider on one side and text on the other.
     The layout alternates: 1st left, 2nd right, 3rd left, 4th right...

     To swap an SVG placeholder for your real photos:
        images: ["images/dispenser-1.jpg", "images/dispenser-2.jpg", "images/dispenser-3.jpg"]
     If you leave images empty (images: []), the SVG placeholder shows.
     You can put any number of images — 1, 3, 10 — slider handles it.
     -------------------------------------------- */
  projects: [
    {
      tag: "Project 01 / Deployed",
      figureLabel: "FIG. 01 / DISPENSER",
      figureLabelRight: "14,000 PSI",
      title: "High-Pressure Gas <em>Dispensing</em> System",
      description: "Configurable outdoor enclosure for a 14,000-psi hydrogen dispenser. Designed for multiple configurations, safe ventilation, field serviceability, and integration of an active chiller to maintain gas below &minus;40&deg;C per SAE J2601 fueling protocol.",
      images: [
        // Add your dispenser photos here, e.g.:
           "images/dispenser-3.jpg",
           "images/dispenser-2.jpg",
           "images/dispenser-1.jpg",
      ],
      placeholder: "dispenser",   // used only when images[] is empty
      specs: [
        { label: "Process", value: "SolidWorks sheet metal enclosure, frame weldments &amp; DFM, DFS Principles for chiller integration" },
        { label: "Deliverables", value: "15+ machined drawings, full GD&amp;T" },
        { label: "Weight reduction", value: "<em>30%</em> lighter than previous" },
        { label: "Field record", value: "<em>Zero</em> leaks · 6+ months operation" },
      ],
    },
    {
      tag: "Project 02 / Certified",
      figureLabel: "FIG. 02 / REFORMER",
      figureLabelRight: "~900&deg;C",
      title: "High-Temperature <em>Reformer</em> Package",
      description: "Packaged a 900&deg;C ATR reformer and combustion system into an 8&nbsp;ft container with 30+ components &mdash; pressure vessels, pumps, blowers, heat exchangers, plumbing, fixtures. Authored SOPs and led emission-certification testing. Developed <strong>ASME Sec VIII Reformer vessel </strong> in collaboration with chemical and process team.",
      images: [
	   "images/reformer-1.jpg",
           "images/reformer-2.jpg",
           

      ],
      placeholder: "reformer",
      specs: [
        { label: "Documentation", value: "P&amp;ID, PFD using AutoCAD, SOP, HAZOP Analysis, Assembly and pipe cut sheet Drawings Package, GA Assembly Drawings" },
        { label: "Design", value: " Pipe routing, Components assembly based on thermal principles, Fixture for components, Harnessing, Bracket designs" },
        { label: "BOM impact", value: "<em>$100K</em> reduced via thermal layout" },
        { label: "Emissions", value: "NOx <em>40% below</em> CSA limit" },
        { label: "Sourcing", value: " Sourced <em>30+</em> Natural Gas and Hydrogen rated components " },
        { label: "Training", value: "<em>5 technicians </em> on startup / shutdown" },
      ],
    },
    {
      tag: "Project 03 / Validated",
      figureLabel: "FIG. 03 / SKID",
      figureLabelRight: "10,000 LB",
      title: "Structural <em>Skid</em> &amp; Frame Engineering",
      description: "Create manufacturing drawings for the different base frames. Design modifications, based on the structural analysis reports",
      images: [
           "images/frame-1.jpg",
           
      ],
      placeholder: "skid",
      specs: [
        { label: "Tools", value: "SolidWorks CAD design and FEA Analysis" },
        { label: "Supported load", value: "10,000+ lbs" },
        { label: "Turnaround", value: "Drawing package in <em>&lt; 24 hrs</em>" },
        { label: "Safety factor", value: "<em>2.5&times;</em> validated load capacity" },
      ],
    },
    {
      tag: "Project 04 / Process Win",
      figureLabel: "FIG. 04 / JIG",
      figureLabelRight: "POKA-YOKE",
      title: "Manufacturing <em>Alignment</em> Jig",
      description: "Resolved a tolerance stack-up issue causing component misalignment during 20&nbsp;ft skid assembly. Designed a poka-yoke jig that standardizes component positioning &mdash; removing guesswork, rework, and manual measurement on every build.",
      images: [ "images/jig-1.jpg", ],
      placeholder: "jig",
      specs: [
        { label: "Method", value: "Tolerance analysis" },
        { label: "Principle", value: "Poka-yoke error-proofing" },
        { label: "Time saved", value: "<em>2 hours</em> per build" },
        { label: "Result", value: "Consistent placement across builds" },
      ],
    },
  ],

  /* -------- PERSONAL FABRICATION PROJECTS (small cards) --------
     Same idea — images: [] uses the SVG placeholder.
     Drop in real photos to replace.
     -------------------------------------------- */
  personalProjects: [
    {
      num: "P / 01 · Arizona State University",
      title: "Electronics Thermal Modeling",
      description: "Built a test bed and validated SolidWorks thermal simulation against a 1D analytical reference &mdash; 95% agreement under forced convection.",
      images: [
                 "images/asu-2.jpg",
               
               "images/asu-1.jpg",

      ],
      placeholder: "thermal",
      meta: [
        { label: "METHOD", value: "DOE + FEA" },
        { label: "VIDEO", value: "<a href='https://www.youtube.com/watch?v=99E7--wId88' target='_blank' style='color:var(--accent);text-decoration:underline;'>Watch ↗</a>" },
      ],
    },
    {
      num: "P / 02 · Arizona State University",
      title: "3D-Printed <em>Space Dust</em> Collector",
      institution: "Arizona State University",
      description: "Inspired by NASA's Stardust mission. Designed Bouligand and triangular collector structures from cellulose nanocrystal (CNC) ink and validated trapping efficiency via ANSYS simulation &mdash; Bouligand geometry captured most particles at the nanometer scale.",
      images: [
                 "images/mnam-1.jpg",
                 "images/mnam-2.jpg",
                 "images/mnam-3.jpg",
                 "images/mnam-4.jpg",
      ],
      placeholder: "thermal",
      meta: [
        { label: "METHOD", value: "Biomimicry + FEA" },
        { label: "TOOLS", value: "SolidWorks / ANSYS" },
      ],
    },
    {
      num: "P / 03 · Research Anna University",
      title: "Fiber-Reinforced <em>Biopolymer</em> Composite",
      description: "Investigated harvest-residue powder as a natural filler in epoxy composites. Hand lay-up fabrication per ASTM standards; tensile, flexural, and impact testing across composition ratios identified blends with superior strength for automotive and construction trim applications.",
      images: [
                 "images/recproject-1.jpg",
                 "images/recproject-2.jpg",
                 "images/recproject-3.jpg",
                 "images/recproject-4.jpg",
      ],
      placeholder: "thermal",
      meta: [
        { label: "METHOD", value: "ASTM Testing" },
        { label: "TOOLS", value: "ANSYS / SolidWorks" },
      ],
    },
    {
      num: "P / 04",
      title: "Macro Keyboard with Programmable Keys",
      description: "Parametric Fusion 360 layout, Raspberry Pi, custom-soldered matrix. Each key reassigned to repetitive design shortcuts.",
      images: [
               "images/keyboard 4.jpg",
               "images/keyboard-3.jpg",
               "images/keyboard-2.jpg",
      ],
      placeholder: "keyboard",
      meta: [
        { label: "MATL", value: "PLA" },
        { label: "CAD", value: "Fusion 360" },
      ],
    },
    {
      num: "P / 05",
      title: "Lego-Style Cable Organizer",
      description: "Snap-fit cable routing. Tuned to cable bend radius. Photoshop mockup for product representation, currently in daily use.",
      images: [
               "images/cable-1.jpg",
               "images/cable-3.jpg",
               "images/cable-2.jpg",
      ],
      placeholder: "cable",
      meta: [
        { label: "MATL", value: "PLA" },
        { label: "CAD", value: "Fusion 360" },
      ],
    },
    {
      num: "P / 06",
      title: "Multi-Device Computer Stand",
      description: "Under 70&nbsp;g, holds 2.5&nbsp;kg+ &mdash; 35&times; its own weight. Gusset geometry and FDM layer direction tuned via SolidWorks analysis.",
      images: [
               "images/stand-1.jpg",
               "images/stand-2.jpg",
               
      ],
      placeholder: "stand",
      meta: [
        { label: "MATL", value: "PLA" },
        { label: "CAD", value: "SolidWorks" },
      ],
    },
    {
      num: "P / 07",
      title: "Quick-Release Walkie-Talkie Car Mount",
      description: "PLA failed in cabin heat after 2 days. PETG iteration: 6+ months in service. A small lesson in material selection.",
      images: [
               "images/mount-1.jpg",
               "images/mount-3.jpg",
               "images/mount-2.jpg",
      ],
      placeholder: "walkie",
      meta: [
        { label: "MATL", value: "PETG" },
        { label: "CAD", value: "SolidWorks" },
      ],
    },
    {
      num: "P / 08",
      title: "Quick-Release Kitchen Towel Holder",
      description: "Single-part 3D print. Mass-distribution lever creates spring-like action without springs or hardware. Roll changes in &lt;5&nbsp;s.",
      images: [
               "images/tstand-1.jpg",
               
               "images/tstand-2.jpg",
      ],
      placeholder: "towel",
      meta: [
        { label: "MATL", value: "PETG" },
        { label: "CAD", value: "SolidWorks" },
      ],
    },
    
  ],

  /* -------- EXPERIENCE TIMELINE -------- */
  experience: [
    {
      dates: "Oct 2024 — Mar 2026",
      location: "Clover, South Carolina",
      role: "Mechanical Product Engineer",
      company: "ONE H2 · DESIGN &amp; DEVELOPMENT",
      bullets: [
        "Led mechanical design for <strong>4 electro-mechanical systems</strong> ($1.2M+ portfolio, 2,000+ line BOMs), delivering 25+ CAD models with GD&amp;T-compliant ASME Y14.5 drawings for CNC, machining, and in-house sheet metal fabrication.",
        "Redesigned a <strong>14,000-psi hydrogen dispensing enclosure</strong> and integrated active chiller to maintain gas temperature below &minus;40&deg;C per SAE protocol for safe fueling.",
        "Designed and validated a <strong> steel skid</strong> (10,000&nbsp;lb capacity) via FEA Simulation, achieving a 2.5&times; safety factor.",
        "Packaged a 900&deg;C reformer system with <strong>30+ components</strong> into an 8&nbsp;ft container; released full structural, assembly, and weldment 2D drawing packages.",
        "Released a complete manufacturing package in 4 weeks; <strong>trained 5 technicians</strong> on startup, shutdown, testing, and validation for CSA certification.",
        "Initiated ECR/ECN action that resolved a sub-assembly failure by swapping one component instead of the full assembly &mdash; <strong>avoided $14K replacement cost.</strong>",
      ],
    },
    {
      dates: "Jun 2024 — Sep 2024",
      location: "Tempe, Arizona",
      role: "Mechanical Design Intern",
      company: "EPICS PRO",
      bullets: [
        "Designed a portable medical device from concept to prototype-ready CAD, applying injection molding DFM principles and reducing overall form factor by <strong>1.5&times;</strong>.",
        "Fabricated a welded test fixture and supported validation testing under static load, drop, and vibration conditions to assess durability.",
      ],
    },
    {
      dates: "Aug 2022 — May 2024",
      location: "Tempe, Arizona",
      role: "M.S. Mechanical Engineering",
      company: "ARIZONA STATE UNIVERSITY",
      bullets: [
        "Project 1: Thermal system modeling for electronics heat management &mdash; built a physical test bed and validated SolidWorks simulation against a 1D analytical reference (<strong>95% agreement</strong> under forced convection).",
      ],
    },
    {
      dates: "Jul 2017 — May 2021",
      location: "Chennai, India",
      role: "B.E. Mechanical Engineering",
      company: "ANNA UNIVERSITY",
      bullets: [" Capstone Project: Investigated harvest-residue powder as a natural filler in epoxy composites. Hand lay-up fabrication per ASTM standards; tensile, flexural, and impact testing across composition ratios identified blends with superior strength for automotive and construction trim applications.",],
    },
  ],

  /* -------- SKILLS --------
     Mark a tag "featured" by adding { name: "...", featured: true }
     -------------------------------------------- */
  skills: [
    {
      title: "CAD &amp; Design",
      sub: "Drawing · Modeling · Analysis",
      tags: [
        { name: "SolidWorks" },
        { name: "Onshape" },
        { name: "AutoCAD" },
        { name: "Inventor" },
        { name: "Creo" },
        { name: "CATIA V5" },
        { name: "GD&amp;T (ASME Y14.5)" },
        { name: "Sheet Metal" },
        { name: "Enclosure Design" },
        { name: "Weldments" },
        { name: "ANSYS / FEA" },
      ],
    },
    {
      title: "Product Development",
      sub: "Concept → Production Release",
      tags: [
        { name: "NPD / NPI" },
        { name: "DFMA" },
        { name: "BOM Release" },
        { name: "ECR / ECN" },
        { name: "DFMEA" },
        { name: "Root Cause (5-Why)" },
        { name: "Tolerance Stack-Up" },
        { name: "Poka-Yoke" },
      ],
    },
    {
      title: "Manufacturing &amp; Standards",
      sub: "Shop floor · Certification",
      tags: [
        { name: "Sheet Metal Fab" },
        { name: "Jigs &amp; Fixtures" },
        { name: "Vendor Sourcing" },
        { name: "Commissioning" },
        { name: "ASME B31.3" },
        { name: "NFPA" },
        { name: "CSA" },
        { name: "UL" },
        { name: "SAE" },
        { name: "Class 1 Div 1 and Div 2" },
        { name: "SOP Development" },
        { name: "HAZOP" },
      ],
    },
    {
      title: "Systems &amp; Software",
      sub: "Workflow · Compute",
      tags: [
        { name: "MATLAB" },
        { name: "Python" },
        { name: "Fishbowl ERP" },
        { name: "Wrike" },
        { name: "Windchill" },
        { name: "P&amp;ID / PFD" },
        { name: "SOP" },
        
        
      ],
    },
  ],

  /* -------- CONTACT -------- */
  contact: {
    title: "Looking for the <em>next problem</em><br>worth solving.",
    sub: "Open to mechanical product, design, and NPD roles across the US. Most interested in teams that ship real hardware, value time on the floor, and treat drawing reviews as a conversation rather than a checkbox.",
    email: "dhwara18@gmail.com",
    phone: "(480) 796-2999",
    phoneHref: "+14807962999",
    location: "Clover, SC",
    locationNote: "Open to relocation",
    linkedinUrl: "https://www.linkedin.com/in/dhwarakesh-vandavasi-balaji/",   // ← paste your real LinkedIn URL here
    portfolioUrl: "#",                          // ← paste your portfolio PDF link here (or leave as #)
  },

};
