// ============================================================
// LANG HANDLER — sistema de tradução EN/PT do site
// Funciona com atributos data-key no HTML: qualquer elemento com
// data-key="chave" tem seu textContent substituído ao trocar idioma.
// O idioma escolhido é salvo no localStorage para persistir entre visitas.
//
// Para adicionar uma nova string ao site:
// 1. Adicionar a chave em strings.en com o texto em inglês
// 2. Adicionar a MESMA chave em strings.pt com o texto em português
// 3. Adicionar data-key="chave" no elemento HTML correspondente
// ============================================================

// Objeto com todos os textos do site em EN e PT.
// Cada chave (ex: 'nav-sobre') corresponde a um atributo data-key no HTML.
const strings = {
    en: {
        // Nav
        'nav-sobre':        "About",
        'nav-projetos':     "Projects",
        'nav-rth':          "RTH Project",
        'nav-catalogo':     "Culture Catalog",
        'nav-explorer':     "RTH World Explorer",
        'lang-label':       "Language",
        'back-projetos':    "← Projects",

        // Sobre
        'heading-sobre':    "Hi, I'm Luciano",
        'bio-p1':           "<span class=\"destaque\">Agronomist and developer</span> focused on agricultural remote sensing and precision agriculture. I work with <span class=\"destaque\">R, Python, and Google Earth Engine</span> to turn spatial data into field decisions.",
        'bio-p2':           "On the Open Source side, I created <span class=\"destaque\">RTH Project</span> — a plugin published in the official QGIS repository that helps download Sentinel-2, Landsat, CBERS, and other satellite imagery in the correct CRS for the region. I also give <span class=\"destaque\">lectures and workshops on Remote Sensing and Agricultural Mapping.</span>",
        'bio-p3-pre':       "I have experience at <span class=\"destaque\">Serasa Experian</span>, Brazil's leading provider of <span class=\"destaque\">satellite crop mapping</span> with Crop Maps, and <span class=\"destaque\">Agroconsult</span>, a top <span class=\"destaque\">market intelligence</span> firm for Brazilian agribusiness. See my experience on ",
        'bio-link-linkedin':"LinkedIn",
        'bio-p3-mid':       " and projects on ",
        'bio-link-github':  "GitHub",
        'bio-p3-end':       ".",
        'bio-legenda':      "Nowadays it feels strange to think I used to use ArcGIS the same way I use QGIS.",
        'bio-legenda2':     "Workshops on Remote Sensing and Agricultural Mapping.",
        'bio-legenda3':     "Presentation at the 3rd Scientific Meeting on Plant Genetic Resources.",
        'bio-legenda4':     "Serasa Experian, Blumenau.",
        'bio-legenda5':     "Agroconsult, Florianópolis.",

        // Projetos
        'heading-projetos': "Projects",
        'proj-1-title':  "Machine Learning Applied to Agricultural Monitoring: Case Study on Corn Cultivation in Luís Eduardo Magalhães (BA)",
        'proj-1-desc':   "This thesis evaluated 9 machine learning models for crop mapping without noise processing or manual verification, identifying which models deliver the best accuracy and require the least revision effort.",
        'proj-2-title':  "RTH Polygon Analysis",
        'proj-2-desc':   "The project receives a specific polygon in JSON format along with a time interval, generating thumbnails in three band compositions — RGB, NIR-SWIR-RED, and contrasted NIR-SWIR-RED — that can be clicked for better visualization on the central map.",
        'proj-3-title':  "RTH Vegetation Charts",
        'proj-3-desc':   "The project receives latitude and longitude coordinates and plots vegetation index charts relevant to agricultural mapping, enabling better crop differentiation without relying on external websites.",
        'proj-4-title':  "RTH Climate Viewer",
        'proj-4-desc':   "The project plots key climate variables for Brazilian states or the entire country, including a weather forecast model, eliminating the need for external sites in agricultural analysis.",
        'proj-5-title':  "RTH Deforestation Monitor",
        'proj-5-desc':   "The project receives a specific polygon in JSON along with selected years and months of interest, generating thumbnails that facilitate the visualization and analysis of deforestation in the selected periods.",
        'proj-6-title':  "John Deere Agricultural Monitor Problem",
        'proj-6-desc':   "The monitor failed to transfer data to USB drives, causing the loss of production records per treatment. Using the pliman package, pixel colors were catalogued and productivity measured, solving the data loss problem.",
        'proj-7-title':  "PDF Data Extraction",
        'proj-7-desc':   "The project solved the problem of extracting data from CEASA/SC PDF reports, converting produce quotes into structured tables and building an automated, continuously updated database.",
        'proj-8-title':  "INMET Rainfall Data Extraction",
        'proj-8-desc':   "The project automated the download of precipitation data from the INMET website using Selenium, significantly reducing the time spent on data collection.",
        'proj-9-title':  "TimeLapse from Latitude and Longitude",
        'proj-9-desc':   "The project takes latitude, longitude, and a time range to generate a GIF of the location in multiple band compositions (RGB, NIR-SWIR-RED, etc.), simplifying the creation of educational materials.",
        'proj-10-title': "ABRAPA Data Extraction",
        'proj-10-desc':  "The project receives an Excel file with cotton-ginning companies, searches Google for each company, and retrieves its latitude and longitude, building a geolocation database of cotton processing units.",
        'proj-11-title': "Element Counting",
        'proj-11-desc':  "The project solved the problem of manually counting elements on Petri dishes or soybean seeds, automating the process through image analysis from a photograph.",
        'proj-rthproject-title':  "RTH PROJECT — QGIS Plugin for Agricultural Mapping & ESG",
        'proj-rthproject-desc':   "Open-source QGIS plugin that centralises remote sensing and agricultural mapping tools in a single environment. From the STAC image catalogue to the drone flight planner, every tool was built to streamline the geotechnology professional's workflow in agribusiness.",
        'proj-rthproject-detail': "Open-source QGIS plugin that centralises remote sensing and agricultural mapping tools in a single environment. From the STAC image catalogue to the drone flight planner, every module was built to streamline the geotechnology professional's workflow in agribusiness — available free in the official QGIS repository.",
        'proj-catalogo-title':    "Crop Catalog",
        'proj-catalogo-desc':     "A personal catalogue of spectral signatures and visual patterns for agricultural crops — a Pokédex of the field. It brings together band compositions, vegetation indices, and temporal behaviour for each crop, serving as a quick reference for identification in satellite imagery.",
        'proj-catalogo-detail':   "A personal catalogue of spectral signatures and visual patterns for agricultural crops — a Pokédex of the field. It brings together band compositions, vegetation indices, and temporal behaviour for each crop, serving as a quick reference for identification in satellite imagery.",
        'proj-explorer-title':    "RTH World Explorer — Mobile App from Field to Office",
        'proj-explorer-desc':     "Android app built for the professional who works from field to office. Captures georeferenced crop points with photos, records productive parameters (soybean, corn, cotton, rice, and more), and generates precision agriculture sampling grids — fully integrated with the RTH PROJECT QGIS plugin.",
        'proj-explorer-detail':   "Android app built for the professional who works from field to office. Captures georeferenced crop points with photos, records productive parameters (soybean, corn, cotton, rice, and more), and generates precision agriculture sampling grids — fully integrated with the RTH PROJECT QGIS plugin.",

        // RTH Project
        'heading-rth':      "RTH Project",

        // RTH Project — Documentação (sidebar e títulos de seção)
        'rth-doc-nav-toggle':            "Navigation",
        'rth-nav-visao-geral':           "Plugin Overview",
        'rth-nav-abrir-projeto':         "Open a Project in QGIS",
        'rth-nav-instalar-plugin':       "Install the Plugin in QGIS",
        'rth-nav-navegar-modulos':       "Navigate Between Modules",
        'rth-nav-catalogo':              "Image Catalog",
        'rth-nav-catalogo-visao-geral':  "Overview",
        'rth-nav-catalogo-satelites':    "Satellites",
        'rth-nav-catalogo-colecoes':     "Collections",
        'rth-nav-catalogo-composicoes':  "Compositions",
        'rth-nav-catalogo-download':              "Download",
        'rth-nav-catalogo-virtualizacao':         "Virtualization",
        'rth-nav-catalogo-aoi':                   "AOI",
        'rth-nav-catalogo-download-virtualizacao':"Download & Virtualization",
        'rth-nav-catalogo-download-inteligente':  "Smart Download",
        'rth-nav-gea':                   "Google Earth Apps",
        'rth-nav-gea-poligonos':         "Polygon Analysis",
        'rth-nav-gea-vegetacao':         "Vegetation Charts",
        'rth-nav-gea-clima':             "Climate Viewer",
        'rth-nav-gea-desmatamento':                  "Deforestation Checker",
        'rth-nav-sensoriamento':                     "Remote Sensing",
        'rth-nav-sensoriamento-desenhar-talhao':     "Draw Plot Automatically",
        'rth-nav-sensoriamento-vetorizar':           "Vectorize Circle",
        'rth-nav-sensoriamento-revisor-poligonos':   "Polygon Reviewer",
        'rth-nav-sensoriamento-pontos-aleatorios':   "Random Points in Layer",
        'rth-nav-sensoriamento-revisor-pontos':      "Point Reviewer",
        'rth-nav-sensoriamento-cobertura':           "Coverage Percentage",
        'rth-nav-sensoriamento-relatorio':           "Point Review Report",
        'rth-nav-sensoriamento-monitor-desmatamento':"Deforestation Monitor",
        'rth-nav-sensoriamento-indices-imagem':      "Vegetation Indices in Image",
        'rth-nav-ml':                                "RTH Machine Learning",
        'rth-nav-ml-stack':                          "ML Image Stack",
        'rth-nav-ml-classificacao':                  "Land Use Classification",
        'rth-nav-agro':                  "Precision Agriculture",
        'rth-nav-agro-pontos-poligono':  "GPS Points to Polygon",
        'rth-nav-agro-grid-pontos':      "Point Grid",
        'rth-nav-agro-exportar-grid':    "Export Grid CSV",
        'rth-nav-agro-importar-grid':    "Import Grid CSV",
        'rth-nav-agro-indices':          "Vegetation Indices in Plot",
        'rth-nav-agro-linhas':           "Planting and Harvest Lines",
        'rth-nav-agro-linhas-bordadura': "Border Lines",
        'rth-nav-agro-analise-linhas':   "Line Analysis",
        'rth-nav-agro-carreadores':      "Create Field Roads",
        'rth-nav-agro-monitor':          "Export to Agricultural Monitor",
        'rth-nav-agro-planejador-voo':   "Drone Flight Planner",
        'rth-nav-agro-analise-voo':      "Drone Flight Analysis",
        'rth-nav-agro-exportar-voo':     "Export Flight Plan",
        'rth-nav-agro-mosaico':          "Automatic Drone Mosaic",
        'rth-nav-agro-mde-mdt':              "Drone DEM/DTM Generation",
        'rth-nav-agro-drone-analises':       "Drone Analysis",
        'rth-nav-agro-drone-contagem':       "Plant Counting",
        'rth-nav-agro-drone-falhas':         "Planting Failure Detection",
        'rth-nav-agro-drone-daninhas':       "Weed Detection",
        'rth-nav-agro-drone-altura':         "Plant Height via DSM-DTM",
        'rth-nav-bases':                 "Geographic Databases",
        'rth-nav-bases-dem':             "Download DEM",
        'rth-nav-bases-prodes':          "Download PRODES",
        'rth-nav-bases-dados-brasil':         "Brazil Public Database",
        'rth-nav-bases-meteo':                "Meteorological Database",
        'rth-nav-bases-basemaps':             "Basemaps",
        'rth-nav-bases-mock':                 "Mock",
        'rth-nav-estilo-rapido':              "Quick Style",
        'rth-nav-estilos-rapidos':            "Quick Styles",
        'rth-nav-estilo-visao-geral':         "Overview",
        'rth-nav-estilo-mock':                "Mock",
        'rth-nav-layout-rapido':              "Quick Layout",
        'rth-nav-layout-impressao':           "Quick Print Layouts",
        'rth-nav-layout-visao-geral':         "Overview",
        'rth-nav-layout-mock':                "Mock",
        'rth-nav-mais':                  "Additional Features",
        'rth-nav-mais-lat-long':         "Capture Lat/Long",
        'rth-nav-mais-localizacao':      "Identify Location",
        'rth-nav-mais-json':             "Capture JSON",
        'rth-nav-mais-google-pro':       "Send to Google Earth Pro",
        'rth-nav-mais-poligono-gep':     "Send Polygon to Google Earth Pro",
        'rth-nav-mais-revisor':          "Polygon Reviewer",
        'rth-nav-mais-area':             "Calculate Area",
        'rth-nav-mais-perimetro':        "Calculate Perimeter",
        'rth-nav-mais-distancia':        "Measure Distance",
        'rth-nav-mais-arcgis':           "Export to ArcGIS",
        'rth-nav-mais-renomear':         "Quick Layer Rename",
        'rth-nav-mais-respawn':          "Respawn",
        'rth-nav-mais-alternar':         "Toggle Layers (Simple & Multiple)",
        'rth-nav-mais-deslocamento-camera': "Camera Displacement",
        'rth-nav-mais-autosave':              "Auto-Save",
        'rth-nav-mais-copa':                  "Measure Tree Canopy",
        'rth-nav-rth-explorer':               "RTH World Explorer",
        'rth-nav-explorer-importar-rota':     "Import Route",
        'rth-nav-explorer-pontos-validacao':  "Import Validation Points",
        'rth-nav-explorer-parametros':        "Import Productive Parameters",
        'rth-nav-explorer-pontos-poligono':   "GPS Points to Polygon",
        'rth-nav-explorer-grid-pontos':       "Point Grid",
        'rth-nav-explorer-exportar-grid':     "Export Grid CSV",
        'rth-nav-explorer-importar-grid':     "Import Grid CSV",
        'rth-nav-informacoes':                "Information",
        'rth-nav-info-como-citar':            "How to Cite",
        'rth-nav-info-doacao':                "Donation",

        // RTH World Explorer — landing page
        'explorer-eyebrow':             "Mobile App · Flutter",
        'explorer-tagline':             "Georeferenced agricultural data collection directly from the field. Productive parameters, routes, sampling grids and much more — integrated with the RTH PROJECT plugin for QGIS.",
        'explorer-integration-title':   "Integrated with <span class=\"accent-ciano\">RTH PROJECT</span>",
        'explorer-integration-sub':     "The app and plugin work together in a seamless field → office workflow.",
        'explorer-step-1':              "Plan the sampling grid in QGIS and export as CSV",
        'explorer-step-2':              "Import the grid into the app and collect data in the field",
        'explorer-step-3':              "Export the points, GPX route and parameters as CSV",
        'explorer-step-4':              "Import into QGIS with the RTH World Explorer module tools",
        'explorer-feat1-num':           "01 — Field Collection",
        'explorer-feat1-name':          "Capture GPS Points",
        'explorer-feat1-desc':          "Capture georeferenced GPS coordinates in the field with an intuitive form. Select the crop (soybean, corn, cotton, rice, winter crops or custom), define the crop side, add photos and notes. The app monitors GPS signal quality, alerts for low battery and saves drafts automatically.",
        'explorer-feat1-tags':          "<span class=\"feature-tag\">Real-time GPS</span><span class=\"feature-tag\">Georeferenced photos</span><span class=\"feature-tag\">6 crops</span><span class=\"feature-tag\">Auto draft</span>",
        'explorer-feat2-num':           "02 — Visualisation",
        'explorer-feat2-name':          "Interactive Map",
        'explorer-feat2-desc':          "View all collected points on the map with colour-coded markers by crop and shape indicating the crop side. Track your GPS position in real time, activate semi-transparent georeferenced layers (PNG+pgw or geo PDF) with opacity control and overlay planned routes or imported KML files.",
        'explorer-feat2-tags':          "<span class=\"feature-tag\">Crop-coded markers</span><span class=\"feature-tag\">Georeferenced layers</span><span class=\"feature-tag\">KML overlay</span><span class=\"feature-tag\">Real-time position</span>",
        'explorer-feat3-num':           "03 — Agronomy",
        'explorer-feat3-name':          "Productive Parameters",
        'explorer-feat3-desc':          "Crop-specific agronomic forms: Soybean (plants/5m, pods/plant, grains/plant, weight and moisture), Corn (plants and ears per 10m, rows and grains per ear), Cotton, Rice and Winter Crops with phenological stage. All crops include a health tab for recording diseases, pests and weeds.",
        'explorer-feat3-tags':          "<span class=\"feature-tag\">Soybean · Corn · Cotton</span><span class=\"feature-tag\">Rice · Winter crops</span><span class=\"feature-tag\">Plant health</span><span class=\"feature-tag\">Phenological stage</span>",
        'explorer-modules-title':       "All <span class=\"accent-roxo\">Modules</span>",
        'explorer-modules-sub':         "Complete tools for the professional working in the field.",
        'explorer-mod-dashboard-name':  "Dashboard",
        'explorer-mod-dashboard-desc':  "Visual panel with total points, today vs yesterday comparison, 7-day chart, distribution by crop and route, and export status (pending vs exported).",
        'explorer-mod-historico-name':  "History",
        'explorer-mod-historico-desc':  "Collapsible tree Day → Route → Points with search and filters. Batch export as CSV or Excel, directly or via Google Drive upload with progress bar.",
        'explorer-mod-grid-name':       "Sampling Grid",
        'explorer-mod-grid-desc':       "Import a CSV with sampling coordinates generated in QGIS. Track visit progress (completed/total) and navigate point by point on the collection map.",
        'explorer-mod-rotas-name':      "Route Planner",
        'explorer-mod-rotas-desc':      "Plan work routes by adding waypoints on the map. Save routes for reuse and overlay them on the main map as a field guide.",
        'explorer-mod-talhao-name':     "Field Boundary",
        'explorer-mod-talhao-desc':     "Draw field boundaries directly on the map. Save with name and date, export individually as CSV to import into QGIS with the RTH PROJECT plugin.",
        'explorer-mod-offline-name':    "Offline Map",
        'explorer-mod-offline-desc':    "Download map tiles for selected areas and use the map even without internet connection in the field. Manage downloaded regions for reuse on future visits.",
        'explorer-mod-relatorio-name':  "Productive Report",
        'explorer-mod-relatorio-desc':  "Analytical dashboard with estimated productivity in sc/ha (average, min, max), plants/m, time evolution, field ranking and top 5 diseases/pests/weeds by crop.",
        'explorer-mod-comprovantes-name': "Expense Receipts",
        'explorer-mod-comprovantes-desc': "Record field expenses (fuel, inputs, daily rates) with history grouped by day and route. Export everything as CSV for spreadsheets or management systems.",
        'explorer-cta-title':           "Download RTH World Explorer",
        'explorer-cta-sub':             "Free · Android · Integrated with the RTH PROJECT plugin for QGIS",

        // Catálogo de Culturas — sidebar e títulos de seção
        'cat-nav-toggle':               "Navigation",
        'cat-mapeamento':               "Agricultural Mapping",
        'cat-mapeamento-p1':            "Agricultural mapping and remote sensing are now <span class=\"destaque\">essential infrastructure for any company operating in agribusiness</span> — as strategic as logistics or finance. With a dedicated team, <span class=\"destaque\">your organisation stops relying on government data (including data from competing countries)</span> and starts verifying and <span class=\"destaque\">producing its own territorial intelligence with precision, speed and independence.</span>",
        'cat-mapeamento-p2':            "Through remote sensing — satellites such as Sentinel-2, Landsat and CBERS — it is possible to monitor at regional or national scale: <span class=\"destaque\">emergency alerts</span> (fires, droughts, floods); <span class=\"destaque\">crop phenological stages</span> (planting, development and harvest, field by field); detection and <span class=\"destaque\">deforestation monitoring</span> in near real time; <span class=\"destaque\">logistics management</span> from farm to port, optimising routes based on the spatial distribution of croplands.",
        'cat-mapeamento-p3':            "Agricultural mapping goes further: <span class=\"destaque\">it enables precise estimates of planted area</span> for any crop at any geographic scale — municipality, state, country or multiple countries (Brazil, USA, China, Argentina). Why rely on official figures from a competing country when you can verify them yourself, with an auditable methodology? This capability underpins high-impact strategic decisions:",
        'cat-mapeamento-p4':            "Logistics planning: with planted area mapped by municipality, it is possible to estimate production volumes, size the required truck fleet and <span class=\"destaque\">anticipate logistical bottlenecks before harvest</span>. Market intelligence — <span class=\"destaque\">continuously monitoring planted area expansion or contraction</span> lets you anticipate supply trends. The trade maxim holds in the data: the <span class=\"destaque\">larger the planted area in a municipality, the lower the local price tends to be</span> — and knowing this ahead of the market is a real competitive edge for contracts and negotiations. <span class=\"destaque\">ESG and traceability</span> — land-use mapping is the objective evidence required by frameworks such as the <span class=\"destaque\">EUDR</span> (EU anti-deforestation regulation), proving that crops are not linked to illegal conversion areas.",
        'cat-soja':                     "Soybean",
        'cat-milho':                    "Corn",
        'cat-milho-grao':               "Grain",
        'cat-milho-silagem':            "Silage",
        'cat-algodao':                  "Cotton",
        'cat-sorgo':                    "Sorghum",
        'cat-milheto':                  "Pearl Millet",
        'cat-gergelim':                 "Sesame",
        'cat-inverno':                  "Winter Crops",
        'cat-feijao':                   "Beans",
        'cat-girassol':                 "Sunflower",
        'cat-amendoim':                 "Peanut",
        'cat-arroz':                    "Rice",
        'cat-arroz-sequeiro':           "Upland Rice",
        'cat-arroz-inundado':           "Flooded Rice",
        'cat-cana':                     "Sugarcane",
        'cat-cana-geral':               "General",
        'cat-cana-reformada':           "Replanted Cane",
        'cat-cana-soca':                "Ratoon Cane",
        'cat-cana-reforma':             "Cane Renovation",
        'cat-cana-rotacao':             "Rotation",
        'cat-cana-curiosidades':        "Curiosities",
        'cat-nabo':                     "Forage Radish",
        'cat-abacaxi':                  "Pineapple",
        'cat-mandioca':                 "Cassava",
        'cat-cafe':                     "Coffee",
        'cat-citros':                   "Citrus",
        'cat-banana':                   "Banana",
        'cat-viticultura':              "Viticulture",
        'cat-pastagens':                "Pastures",
        'cat-reflorestamento':          "Reforestation",
        'cat-desmatamento':             "Deforestation",
        'cat-usinas-fotovoltaicas':     "Photovoltaic Plants",

        // Catálogo (heading legado)
        'heading-catalogo': "Culture Catalog",

        // Compartilhado
        'coming-soon':      "Coming soon.",

        // Páginas de detalhe — rótulo de link e botão de acesso
        'link-projeto':     "Project Link:",
        'link-tcc':         "TCC Link:",
        'acesse-aqui':      "Access here",

        // Conteúdo das páginas de detalhe de cada projeto
        'proj-1-p1':        "The agricultural expansion and crop diversification show that remote sensing applied to agriculture requires optimizations in cultivated area mapping. This work evaluated nine supervised classification algorithms for estimating corn area in Luís Eduardo Magalhães (BA) during the 2024/2025 first harvest. Sentinel-2 images were used in two compositions: a simple 3-band (B8, B11, B4) and a 9-band raster stack. Algorithms were applied at two phenological stages: full development and senescence. Three metrics were used: Kappa index, area deviation from manual mapping, and participatory evaluation. <span class=\"destaque\">The best-performing model was the Gaussian Mixture Model (GMM), achieving Kappa of 0.859 in the simple composition and 0.928 in the raster stack.</span> It showed low deviation from manual mapping and top scores in the participatory evaluation, suggesting the GMM can work as a pre-mapping assistant in the interpretation and initial vectorization stages.",
        'proj-1-p2':        "Considering the Kappa metrics and hectare variation from manual methodology, <span class=\"destaque\">the best model for a stack composition at the start of the cycle was again the Gaussian Mixture Model with Kappa of 0.928 and an area of 14,315.18 ha (+0.017% above manual mapping), making it a reliable mapping assistant for this condition.</span> The worst model was Naive Bayes, whose Kappa dropped from 0.843 to 0.746, suggesting the more complex dataset impaired its classification capacity.",
        'proj-2-detail':    "Add the desired polygon for analysis and time interval. <span class=\"destaque\">Results in 3 clickable thumbnails for better analysis</span>",
        'proj-3-detail':    "Vegetation charts from a known latitude and longitude of important indices such as <span class=\"destaque\">NDVI, EVI, SAVI, MSAVI and NDMI</span>",
        'proj-4-detail':    "Get the <span class=\"destaque\">weather forecast</span> from 1 to 15 days using <span class=\"destaque\">American and European models</span>, along with <span class=\"destaque\">key agrometeorological variables: Temperature (Average, min and max), Precipitation, Humidity, Evapotranspiration, Degree days, Cloudy days, Sunny days, Dry days and Rainy days (consecutive or accumulated).</span>",
        'proj-5-detail':    "The project takes a specific polygon in JSON along with the selection of years and months of interest.",
        'proj-6-p1':        "The <span class=\"destaque\">pen drive could not unload the harvest data from the center pivot.</span> I received a photo of the monitor and used <span class=\"destaque\">image recognition to identify the pixels and match them to the legend.</span>",
        'proj-6-p2':        "However, there were <span class=\"destaque\">commercial treatments within the center pivot</span>, and from this I was able to separate and differentiate results by treatment.",
        'proj-6-p3':        "After processing the data, we received an Excel file with the center pivot results and obtained the data broken down by treatment.",
        'proj-7-detail':    "The CEASA of SC still <span class=\"destaque\">provides data in PDF instead of Excel</span>, so the <span class=\"destaque\">project extracts this information and creates an Excel file.</span>",
        'proj-8-detail':    "Have you ever imagined starting your workday downloading precipitation data from INMET? Yes, some people still do that. The <span class=\"destaque\">project automated this download using the Selenium package.</span>",
        'proj-9-detail':    "Imagine a script that creates <span class=\"destaque\">GIFs for you to use in presentations using only latitude, longitude and a time period.</span> This project does exactly that — it <span class=\"destaque\">generates the GIFs using Google Earth Engine.</span>",
        'proj-10-detail':   "<span class=\"destaque\">There are no databases of cotton gins with georeferenced coordinates.</span> The project <span class=\"destaque\">searches Google for active gins and extracts the latitude and longitude from the company location link.</span>",
        'proj-11-detail':   "The project was initially written for <span class=\"destaque\">counting colonies on Petri dishes</span>, automating the process. However, <span class=\"destaque\">we found the algorithm can be applied to other uses.</span>",
    },
    pt: {
        // Nav
        'nav-sobre':        "Sobre",
        'nav-projetos':     "Projetos",
        'nav-rth':          "RTH Project",
        'nav-catalogo':     "Catálogo de Culturas",
        'nav-explorer':     "RTH World Explorer",
        'lang-label':       "Idioma",
        'back-projetos':    "← Projetos",

        // Sobre
        'heading-sobre':    "Olá, sou Luciano",
        'bio-p1':           "<span class=\"destaque\">Agrônomo e desenvolvedor</span> com foco em sensoriamento remoto agrícola e agricultura de precisão. Trabalho com <span class=\"destaque\">R, Python e Google Earth Engine</span> para transformar dados espaciais em decisões de campo.",
        'bio-p2':           "No lado Open Source, criei o <span class=\"destaque\">RTH Project</span> — plugin publicado no repositório oficial do QGIS que auxilia no download de imagens Sentinel-2, Landsat, CBERS e outros satélites no CRS correto da região. Também dou <span class=\"destaque\">palestras e workshops sobre Sensoriamento Remoto e Mapeamento Agrícola.</span>",
        'bio-p3-pre':       "Tenho experiência na <span class=\"destaque\">Serasa Experian</span>, referência nacional em <span class=\"destaque\">mapeamento de culturas agrícolas</span> via satélite com o Crop Maps, e na <span class=\"destaque\">Agroconsult</span>, líder em <span class=\"destaque\">inteligência de mercado</span> no agronegócio brasileiro. Veja minha trajetória no ",
        'bio-link-linkedin':"LinkedIn",
        'bio-p3-mid':       " e os projetos no ",
        'bio-link-github':  "GitHub",
        'bio-p3-end':       ".",
        'bio-legenda':      "Hoje em dia é doido pensar que uso o ArcGIS como se fosse o QGIS.",
        'bio-legenda2':     "Workshops sobre Sensoriamento Remoto e Mapeamento Agrícola.",
        'bio-legenda3':     "Apresentação no 3º Encontro Científico de Recursos Genéticos Vegetais.",
        'bio-legenda4':     "Serasa Experian, Blumenau.",
        'bio-legenda5':     "Agroconsult, Florianópolis.",

        // Projetos
        'heading-projetos': "Projetos",
        'proj-1-title':  "Machine learning aplicado ao monitoramento agrícola: estudo de caso no cultivo de milho em Luís Eduardo Magalhães (BA)",
        'proj-1-desc':   "O TCC buscou verificar quais dos 9 modelos de machine learning foram mais representativos em relação ao mapeamento manual de culturas agrícolas. A ideia foi executar os modelos sem processamento de ruído ou validação manual, comprovando a acurácia de cada um e identificando qual exigiria menos retrabalho na revisão.",
        'proj-2-title':  "RTH Análise de Polígono",
        'proj-2-desc':   "O projeto recebe um polígono específico em JSON junto com um intervalo de tempo, gerando thumbnails em três composições de bandas — RGB, NIR-SWIR-RED e NIR-SWIR-RED contrastada — que podem ser clicadas para melhor visualização no mapa central.",
        'proj-3-title':  "RTH Gráficos de Vegetação",
        'proj-3-desc':   "O projeto recebe uma coordenada de latitude e longitude e plota gráficos de índices de vegetação relevantes para o mapeamento agrícola, permitindo uma melhor diferenciação entre culturas sem depender de sites externos.",
        'proj-4-title':  "RTH Visualizador de Clima",
        'proj-4-desc':   "O projeto plota variáveis climáticas importantes para estados brasileiros ou para o Brasil, incluindo um modelo de previsão do tempo, eliminando a dependência de sites externos para análises agrícolas.",
        'proj-5-title':  "RTH Verificar Desmatamento",
        'proj-5-desc':   "O projeto recebe um polígono específico em JSON junto com a seleção dos anos e meses de interesse, gerando thumbnails que facilitam a visualização e a análise do desmatamento nos períodos selecionados.",
        'proj-6-title':  "Problema monitor agrícola John Deere",
        'proj-6-desc':   "Este monitor não transferia os dados para o pendrive, causando a perda dos registros de produção por tratamento. Com o pacote pliman foi possível catalogar a cor de cada pixel e medir as produtividades, resolvendo o problema de perda de dados.",
        'proj-7-title':  "Extração de Dados de PDF",
        'proj-7-desc':   "O projeto resolveu o problema de extrair dados de PDFs do CEASA de SC, obtendo as cotações de verduras e frutas em formato de tabela estruturada. Com isso foi possível criar um banco de dados robusto e atualizado automaticamente.",
        'proj-8-title':  "Extrair Chuva INMET",
        'proj-8-desc':   "O projeto automatizou o download de dados de precipitação do site do INMET utilizando Selenium, reduzindo significativamente o tempo gasto na coleta dessas informações.",
        'proj-9-title':  "TimeLapse utilizando Latitude e Longitude",
        'proj-9-desc':   "O projeto recebe uma latitude, longitude e um intervalo de tempo, gerando um GIF do local em diferentes composições de bandas (RGB, NIR-SWIR-RED etc.), facilitando a criação de materiais didáticos.",
        'proj-10-title': "Extrair dados da ABRAPA",
        'proj-10-desc':  "O projeto recebe um arquivo Excel com empresas que beneficiam algodão, busca cada empresa no Google e extrai sua latitude e longitude, criando um banco de dados geolocalizado de unidades beneficiadoras de algodão.",
        'proj-11-title': "Contagem de Elementos",
        'proj-11-desc':  "O projeto resolveu o problema de contar manualmente os elementos em placas de Petri ou grãos de soja, automatizando o processo por meio de análise de imagem a partir de uma fotografia.",
        'proj-rthproject-title':  "RTH PROJECT — Plugin QGIS para Mapeamento Agrícola & ESG",
        'proj-rthproject-desc':   "Plugin open-source para QGIS que centraliza ferramentas de sensoriamento remoto e mapeamento agrícola em um único ambiente. Do catálogo de imagens via STAC ao planejador de voo para drones, cada ferramenta foi desenvolvida para otimizar o fluxo de trabalho do profissional de geotecnologias no agronegócio.",
        'proj-rthproject-detail': "Plugin open-source para QGIS que centraliza ferramentas de sensoriamento remoto e mapeamento agrícola em um único ambiente. Do catálogo de imagens via STAC ao planejador de voo para drones, cada módulo foi desenvolvida para otimizar o fluxo de trabalho do profissional de geotecnologias no agronegócio — disponível gratuitamente no repositório oficial do QGIS.",
        'proj-catalogo-title':    "Catálogo de Culturas",
        'proj-catalogo-desc':     "Catálogo pessoal de assinaturas espectrais e padrões visuais de culturas agrícolas — uma espécie de Pokédex do agro. Reúne composições de bandas, índices de vegetação e comportamento temporal de cada cultura, servindo como referência rápida para identificação em imagens de satélite.",
        'proj-catalogo-detail':   "Catálogo pessoal de assinaturas espectrais e padrões visuais de culturas agrícolas — uma espécie de Pokédex do agro. Reúne composições de bandas, índices de vegetação e comportamento temporal de cada cultura, servindo como referência rápida para identificação em imagens de satélite.",
        'proj-explorer-title':    "RTH World Explorer — Aplicativo de Celular do Campo ao Escritório",
        'proj-explorer-desc':     "Aplicativo Android desenvolvido para o profissional que trabalha do campo ao escritório. Captura pontos georreferenciados de culturas com fotos, coleta parâmetros produtivos (soja, milho, algodão, arroz e outros) e gera grids amostrais de agricultura de precisão — totalmente integrado ao plugin RTH PROJECT para QGIS.",
        'proj-explorer-detail':   "Aplicativo Android desenvolvido para o profissional que trabalha do campo ao escritório. Captura pontos georreferenciados de culturas com fotos, coleta parâmetros produtivos (soja, milho, algodão, arroz e outros) e gera grids amostrais de agricultura de precisão — totalmente integrado ao plugin RTH PROJECT para QGIS.",

        // RTH Project
        'heading-rth':      "RTH Project",

        // RTH Project — Documentação (sidebar e títulos de seção)
        'rth-doc-nav-toggle':            "Navegação",
        'rth-nav-visao-geral':           "Visão Geral do Plugin",
        'rth-nav-abrir-projeto':         "Abrir um Projeto no QGIS",
        'rth-nav-instalar-plugin':       "Instalar o Plugin no QGIS",
        'rth-nav-navegar-modulos':       "Navegar entre Módulos",
        'rth-nav-catalogo':              "Catálogo de Imagens",
        'rth-nav-catalogo-visao-geral':  "Visão Geral",
        'rth-nav-catalogo-satelites':    "Satélites",
        'rth-nav-catalogo-colecoes':     "Coleções",
        'rth-nav-catalogo-composicoes':  "Composições",
        'rth-nav-catalogo-download':              "Download",
        'rth-nav-catalogo-virtualizacao':         "Virtualização",
        'rth-nav-catalogo-aoi':                   "AOI",
        'rth-nav-catalogo-download-virtualizacao':"Download e Virtualização",
        'rth-nav-catalogo-download-inteligente':  "Download Inteligente",
        'rth-nav-gea':                   "Google Earth Apps",
        'rth-nav-gea-poligonos':         "Análise de Polígonos",
        'rth-nav-gea-vegetacao':         "Gráficos de Vegetação",
        'rth-nav-gea-clima':             "Visualizador de Clima",
        'rth-nav-gea-desmatamento':                  "Verificador de Desmatamento",
        'rth-nav-sensoriamento':                     "Sensoriamento Remoto",
        'rth-nav-sensoriamento-desenhar-talhao':     "Desenhar Talhão Automaticamente",
        'rth-nav-sensoriamento-vetorizar':           "Vetorizar Círculo",
        'rth-nav-sensoriamento-revisor-poligonos':   "Revisor de Polígonos",
        'rth-nav-sensoriamento-pontos-aleatorios':   "Pontos Aleatórios em Camada",
        'rth-nav-sensoriamento-revisor-pontos':      "Revisor de Pontos",
        'rth-nav-sensoriamento-cobertura':           "Porcentagem de Cobertura",
        'rth-nav-sensoriamento-relatorio':           "Relatório de Revisão de Pontos",
        'rth-nav-sensoriamento-monitor-desmatamento':"Monitor de Desmatamento",
        'rth-nav-sensoriamento-indices-imagem':      "Índices de Vegetação em Imagem",
        'rth-nav-ml':                                "RTH Machine Learning",
        'rth-nav-ml-stack':                          "Stack de Imagem ML",
        'rth-nav-ml-classificacao':                  "Classificação de Uso do Solo",
        'rth-nav-agro':                  "Agricultura de Precisão",
        'rth-nav-agro-pontos-poligono':  "Pontos de GPS para Polígono",
        'rth-nav-agro-grid-pontos':      "Grid de Pontos",
        'rth-nav-agro-exportar-grid':    "Exportar Grid CSV",
        'rth-nav-agro-importar-grid':    "Importar Grid CSV",
        'rth-nav-agro-indices':          "Índices de Vegetação em Talhão",
        'rth-nav-agro-linhas':           "Linhas de Plantio e Colheita",
        'rth-nav-agro-linhas-bordadura': "Linhas de Bordadura",
        'rth-nav-agro-analise-linhas':   "Análise de Linhas",
        'rth-nav-agro-carreadores':      "Criação de Carreadores",
        'rth-nav-agro-monitor':          "Exportar para Monitor Agrícola",
        'rth-nav-agro-planejador-voo':   "Planejador de Voo para Drones",
        'rth-nav-agro-analise-voo':      "Análise de Voo para Drones",
        'rth-nav-agro-exportar-voo':     "Exportar Plano de Voo",
        'rth-nav-agro-mosaico':          "Mosaico Automático de Drone",
        'rth-nav-agro-mde-mdt':              "Geração de MDE/MDT de Drone",
        'rth-nav-agro-drone-analises':       "Análises para Drone",
        'rth-nav-agro-drone-contagem':       "Contagem de Plantas",
        'rth-nav-agro-drone-falhas':         "Detecção de Falhas de Plantio",
        'rth-nav-agro-drone-daninhas':       "Detecção de Daninhas",
        'rth-nav-agro-drone-altura':         "Altura de Planta via DSM-DTM",
        'rth-nav-bases':                 "Bases Geográficas",
        'rth-nav-bases-dem':             "Baixar DEM",
        'rth-nav-bases-prodes':          "Baixar PRODES",
        'rth-nav-bases-dados-brasil':         "Base de Dados Pública do Brasil",
        'rth-nav-bases-meteo':                "Base de Dados Meteorológicos",
        'rth-nav-bases-basemaps':             "Basemaps",
        'rth-nav-bases-mock':                 "Mock",
        'rth-nav-estilo-rapido':              "Estilo Rápido",
        'rth-nav-estilos-rapidos':            "Estilos Rápidos",
        'rth-nav-estilo-visao-geral':         "Visão Geral",
        'rth-nav-estilo-mock':                "Mock",
        'rth-nav-layout-rapido':              "Layout Rápido",
        'rth-nav-layout-impressao':           "Layout de Impressão Rápidos",
        'rth-nav-layout-visao-geral':         "Visão Geral",
        'rth-nav-layout-mock':                "Mock",
        'rth-nav-mais':                  "Funcionalidades Adicionais",
        'rth-nav-mais-lat-long':         "Capturar Lat/Long",
        'rth-nav-mais-localizacao':      "Identificar Localização",
        'rth-nav-mais-json':             "Capturar JSON",
        'rth-nav-mais-google-pro':       "Enviar ao Google Earth Pro",
        'rth-nav-mais-poligono-gep':     "Enviar Polígono ao Google Earth Pro",
        'rth-nav-mais-revisor':          "Revisor de Polígonos",
        'rth-nav-mais-area':             "Calcular Área",
        'rth-nav-mais-perimetro':        "Calcular Perímetro",
        'rth-nav-mais-distancia':        "Medir Distância",
        'rth-nav-mais-arcgis':           "Exportar para ArcGIS",
        'rth-nav-mais-renomear':         "Renomear Layer Rápido",
        'rth-nav-mais-respawn':          "Respawn",
        'rth-nav-mais-alternar':         "Alternar Camadas (Simples e Múltiplas)",
        'rth-nav-mais-deslocamento-camera': "Deslocamento de Câmera",
        'rth-nav-mais-autosave':              "Auto-Save",
        'rth-nav-mais-copa':                  "Medir Copa das Árvores",
        'rth-nav-rth-explorer':               "RTH World Explorer",
        'rth-nav-explorer-importar-rota':     "Importar Rota",
        'rth-nav-explorer-pontos-validacao':  "Importar Pontos de Validação",
        'rth-nav-explorer-parametros':        "Importar Parâmetros Produtivos",
        'rth-nav-explorer-pontos-poligono':   "Pontos de GPS para Polígono",
        'rth-nav-explorer-grid-pontos':       "Grid de Pontos",
        'rth-nav-explorer-exportar-grid':     "Exportar Grid CSV",
        'rth-nav-explorer-importar-grid':     "Importar Grid CSV",
        'rth-nav-informacoes':                "Informações",
        'rth-nav-info-como-citar':            "Como Citar",
        'rth-nav-info-doacao':                "Doação",

        // RTH World Explorer — landing page
        'explorer-eyebrow':             "App Mobile · Flutter",
        'explorer-tagline':             "Coleta de dados agrícolas georreferenciados diretamente do campo. Parâmetros produtivos, rotas, grids de amostragem e muito mais — integrado ao plugin RTH PROJECT para QGIS.",
        'explorer-integration-title':   "Integrado ao <span class=\"accent-ciano\">RTH PROJECT</span>",
        'explorer-integration-sub':     "O app e o plugin funcionam juntos num fluxo campo → escritório sem fricção.",
        'explorer-step-1':              "Planeje o grid amostral no QGIS e exporte como CSV",
        'explorer-step-2':              "Importe o grid no app e colete os dados no campo",
        'explorer-step-3':              "Exporte os pontos, rota GPX e parâmetros como CSV",
        'explorer-step-4':              "Importe no QGIS com as ferramentas do módulo RTH World Explorer",
        'explorer-feat1-num':           "01 — Coleta de Campo",
        'explorer-feat1-name':          "Capturar Pontos GPS",
        'explorer-feat1-desc':          "Capture coordenadas GPS georreferenciadas no campo com um formulário intuitivo. Selecione a cultura (soja, milho, algodão, arroz, culturas de inverno ou personalizado), defina o lado da lavoura, adicione fotos e observações. O app monitora a qualidade do sinal GPS, alerta para bateria fraca e salva rascunhos automaticamente.",
        'explorer-feat1-tags':          "<span class=\"feature-tag\">GPS em tempo real</span><span class=\"feature-tag\">Fotos georreferenciadas</span><span class=\"feature-tag\">6 culturas</span><span class=\"feature-tag\">Rascunho automático</span>",
        'explorer-feat2-num':           "02 — Visualização",
        'explorer-feat2-name':          "Mapa Interativo",
        'explorer-feat2-desc':          "Visualize todos os pontos coletados no mapa com marcadores coloridos por cultura e forma indicando o lado da lavoura. Acompanhe sua posição GPS em tempo real, ative camadas georreferenciadas semitransparentes (PNG+pgw ou PDF geo) com controle de opacidade e sobreponha rotas planejadas ou arquivos KML importados.",
        'explorer-feat2-tags':          "<span class=\"feature-tag\">Marcadores por cultura</span><span class=\"feature-tag\">Camadas georreferenciadas</span><span class=\"feature-tag\">Overlay KML</span><span class=\"feature-tag\">Posição em tempo real</span>",
        'explorer-feat3-num':           "03 — Agronomia",
        'explorer-feat3-name':          "Parâmetros Produtivos",
        'explorer-feat3-desc':          "Formulários agronômicos específicos por cultura: Soja (plantas/5m, vagens/planta, grãos/planta, peso e umidade), Milho (plantas e espigas por 10m, fileiras e grãos por espiga), Algodão, Arroz e Culturas de Inverno com estádio fenológico. Todas as culturas incluem aba de sanidade para registro de doenças, pragas e plantas daninhas.",
        'explorer-feat3-tags':          "<span class=\"feature-tag\">Soja · Milho · Algodão</span><span class=\"feature-tag\">Arroz · Inverno</span><span class=\"feature-tag\">Sanidade vegetal</span><span class=\"feature-tag\">Estádio fenológico</span>",
        'explorer-modules-title':       "Todos os <span class=\"accent-roxo\">Módulos</span>",
        'explorer-modules-sub':         "Ferramentas completas para o profissional que trabalha no campo.",
        'explorer-mod-dashboard-name':  "Dashboard",
        'explorer-mod-dashboard-desc':  "Painel visual com total de pontos, comparativo hoje vs ontem, gráfico dos últimos 7 dias, distribuição por cultura e rota, e status de exportação (pendentes vs exportados).",
        'explorer-mod-historico-name':  "Histórico",
        'explorer-mod-historico-desc':  "Árvore colapsável Dia → Rota → Pontos com busca e filtros. Exportação em lote como CSV ou Excel, direto ou via upload para o Google Drive com barra de progresso.",
        'explorer-mod-grid-name':       "Grid Amostral",
        'explorer-mod-grid-desc':       "Importe um CSV com coordenadas de amostragem gerado no QGIS. Acompanhe o progresso de visitas (concluídos/total) e navegue ponto a ponto no mapa de coleta.",
        'explorer-mod-rotas-name':      "Planejador de Rotas",
        'explorer-mod-rotas-desc':      "Trace rotas de trabalho adicionando waypoints no mapa. Salve rotas para reutilização e sobreponha-as no mapa principal como guia de campo.",
        'explorer-mod-talhao-name':     "Talhão",
        'explorer-mod-talhao-desc':     "Desenhe os limites de talhões diretamente sobre o mapa. Salve com nome e data, exporte individualmente como CSV para importar no QGIS com o plugin RTH PROJECT.",
        'explorer-mod-offline-name':    "Mapa Offline",
        'explorer-mod-offline-desc':    "Baixe tiles de mapa para áreas selecionadas e use o mapa mesmo sem conexão à internet no campo. Gerencie as regiões baixadas para reutilização em visitas futuras.",
        'explorer-mod-relatorio-name':  "Relatório Produtivo",
        'explorer-mod-relatorio-desc':  "Dashboard analítico com produtividade estimada em sc/ha (média, mín, máx), plantas/m, evolução temporal, ranking de talhões e top 5 doenças/pragas/daninhas por cultura.",
        'explorer-mod-comprovantes-name': "Comprovantes de Gastos",
        'explorer-mod-comprovantes-desc': "Registre despesas de campo (combustível, insumos, diárias) com histórico agrupado por dia e rota. Exporte tudo como CSV para planilhas ou sistemas de gestão.",
        'explorer-cta-title':           "Baixe o RTH World Explorer",
        'explorer-cta-sub':             "Gratuito · Android · Integrado ao plugin RTH PROJECT para QGIS",

        // Catálogo de Culturas — sidebar e títulos de seção
        'cat-nav-toggle':               "Navegação",
        'cat-mapeamento':               "Mapeamento Agrícola",
        'cat-mapeamento-p1':            "O mapeamento agrícola e o sensoriamento remoto são hoje <span class=\"destaque\">infraestrutura essencial para qualquer empresa que atua no agronegócio</span> — tão estratégicos quanto logística ou finanças. Com um setor dedicado, <span class=\"destaque\">sua organização deixa de depender de dados do governo (incluindo dados de países concorrentes)</span> e passa a verificar e <span class=\"destaque\">produzir suas próprias informações territoriais com precisão, velocidade e independência.</span>",
        'cat-mapeamento-p2':            "Por meio do sensoriamento remoto — imagens de satélites como Sentinel-2, Landsat e CBERS — é possível monitorar em escala regional ou nacional: <span class=\"destaque\">alertas de emergência</span> (incêndios, secas, inundações); <span class=\"destaque\">estádio fenológico de culturas</span> (plantio, desenvolvimento e colheita talhão a talhão); detecção e <span class=\"destaque\">monitoramento de desmatamento</span> em tempo quase real; <span class=\"destaque\">gestão logística</span> de fazendas ao porto, otimizando rotas com base na distribuição espacial das lavouras.",
        'cat-mapeamento-p3':            "Com o mapeamento agrícola vai além: <span class=\"destaque\">é possível estimar com precisão a área plantada</span> de uma determinada cultura em qualquer escala geográfica — município, estado, país ou até múltiplos países (Brasil, EUA, China, Argentina). Por que confiar nos números oficiais de um país concorrente quando é possível verificar por conta própria, com metodologia auditável? Essa capacidade é a base para decisões estratégicas de alto impacto:",
        'cat-mapeamento-p4':            "Planejamento de escoamento: com área plantada mapeada por município, é possível estimar volumes de produção, dimensionar a frota de caminhões necessária e <span class=\"destaque\">antecipar gargalos logísticos antes da colheita</span>. Inteligência de mercado — <span class=\"destaque\">monitorar expansão ou retração de área plantada</span> de forma contínua permite antecipar tendências de oferta. Trade com precisão se confirma nos dados: quanto <span class=\"destaque\">maior a área plantada em um município, menor tende a ser o preço local</span> — e saber isso antes do mercado é vantagem competitiva real para contratos e negociações. <span class=\"destaque\">ESG e rastreabilidade</span> — o mapeamento de uso do solo é a evidência objetiva exigida por iniciativas como a <span class=\"destaque\">EUDR</span> (regulação europeia anti-desmatamento), garantindo que as culturas não estejam associadas a áreas de conversão ilegal.",
        'cat-soja':                     "Soja",
        'cat-milho':                    "Milho",
        'cat-milho-grao':               "Grão",
        'cat-milho-silagem':            "Silagem",
        'cat-algodao':                  "Algodão",
        'cat-sorgo':                    "Sorgo",
        'cat-milheto':                  "Milheto",
        'cat-gergelim':                 "Gergelim",
        'cat-inverno':                  "Culturas de Inverno",
        'cat-feijao':                   "Feijão",
        'cat-girassol':                 "Girassol",
        'cat-amendoim':                 "Amendoim",
        'cat-arroz':                    "Arroz",
        'cat-arroz-sequeiro':           "Sequeiro",
        'cat-arroz-inundado':           "Inundado",
        'cat-cana':                     "Cana de Açúcar",
        'cat-cana-geral':               "Geral",
        'cat-cana-reformada':           "Cana Reformada",
        'cat-cana-soca':                "Cana Soca",
        'cat-cana-reforma':             "Cana Reforma",
        'cat-cana-rotacao':             "Rotação",
        'cat-cana-curiosidades':        "Curiosidades",
        'cat-nabo':                     "Nabo Forrageiro",
        'cat-abacaxi':                  "Abacaxi",
        'cat-mandioca':                 "Mandioca",
        'cat-cafe':                     "Café",
        'cat-citros':                   "Citros",
        'cat-banana':                   "Banana",
        'cat-viticultura':              "Viticultura",
        'cat-pastagens':                "Pastagens",
        'cat-reflorestamento':          "Reflorestamento",
        'cat-desmatamento':             "Desmatamento",
        'cat-usinas-fotovoltaicas':     "Usinas Fotovoltaicas",

        // Catálogo (heading legado)
        'heading-catalogo': "Catálogo de Culturas",

        // Compartilhado
        'coming-soon':      "Em breve.",

        // Páginas de detalhe — rótulo de link e botão de acesso
        'link-projeto':     "Link do Projeto:",
        'link-tcc':         "Link do TCC:",
        'acesse-aqui':      "Acesse aqui",

        // Conteúdo das páginas de detalhe de cada projeto
        'proj-1-p1':        "A expansão agrícola e a diversificação de culturas evidenciam que o sensoriamento remoto aplicado à agricultura necessita de otimizações nos processos de mapeamento das áreas cultivadas. Este trabalho teve como objetivo avaliar a capacidade preditiva de nove algoritmos de classificação supervisionada para a estimativa da área de milho cultivada no município de Luís Eduardo Magalhães (BA), durante a primeira safra do ano agrícola 2024/2025. Foram utilizadas imagens do satélite Sentinel-2 em duas composições: simples com 3 bandas (B8, B11, B4) e stack raster com 9 bandas. Os algoritmos foram aplicados em dois períodos fenológicos: desenvolvimento pleno e senescência. Três métricas foram usadas: índice Kappa, variação das áreas vs. mapeamento manual e avaliação participativa. <span class=\"destaque\">O modelo com melhor desempenho foi o Gaussian Mixture Model (GMM), alcançando Kappa de 0,859 na composição simples e 0,928 no stack raster.</span> Apresentou baixa variação em relação ao mapeamento manual e as melhores avaliações participativas, indicando que o GMM pode ser utilizado como assistente de pré-mapeamento nas etapas de interpretação e vetorização inicial.",
        'proj-1-p2':        "Considerando as métricas de Kappa e a variação dos hectares da metodologia manual, <span class=\"destaque\">o melhor modelo para uma composição stack no início de ciclo foi novamente o Gaussian Mixture Model com Kappa de 0,928 e área de 14.315,18 ha (+0,017% acima do mapeamento manual), podendo ser considerado um bom modelo assistente para essa condição.</span> Por outro lado, o pior modelo foi o Naive Bayes, cujo Kappa caiu de 0,843 para 0,746, sugerindo que o conjunto de dados mais complexo prejudicou sua capacidade de classificação.",
        'proj-2-detail':    "Adicione o polígono desejado para análise e intervalo de tempo. <span class=\"destaque\">Resultará em 3 thumbnails clicáveis para melhor análise</span>",
        'proj-3-detail':    "Gráficos de Vegetação de uma latitude e longitude conhecida de índices importantes como <span class=\"destaque\">NDVI, EVI, SAVI, MSAVI e NDMI</span>",
        'proj-4-detail':    "Pode-se obter a <span class=\"destaque\">previsão do tempo</span> de 1 dia até 15 dias nos <span class=\"destaque\">modelos americanos e europeu</span>, bem como <span class=\"destaque\">variáveis importantes para a agrometeorologia como Temperatura (Média, mínima e máxima), Precipitação, Umidade, Evapotranspiração, Graus dias, Dias nublados, Dias ensolarados, Dias sem chuvas e Dias com Chuva (Consecutivos ou acumulado).</span>",
        'proj-5-detail':    "O projeto recebe um polígono específico em JSON junto com a seleção dos anos e meses de interesse.",
        'proj-6-p1':        "O <span class=\"destaque\">pendrive não estava conseguindo descarregar as informações da colheita do pivô central.</span> Recebi uma foto do monitor e utilizei <span class=\"destaque\">reconhecimento de imagem para identificar os pixels e bater com a legenda.</span>",
        'proj-6-p2':        "Porém havia <span class=\"destaque\">tratamentos comerciais dentro do pivô central</span>, e com isso consegui separar e diferenciar os resultados por tratamento.",
        'proj-6-p3':        "Após o tratamento dos dados, recebemos um Excel com resultados do pivô central e conseguimos obter os dados separados por tratamento.",
        'proj-7-detail':    "O CEASA de SC ainda <span class=\"destaque\">fornece os dados em PDF ao invés de Excel</span>, logo o <span class=\"destaque\">projeto extrai essas informações e cria um Excel.</span>",
        'proj-8-detail':    "Já imaginou você ter que iniciar seu dia de trabalho baixando dados de precipitação do INMET? Sim, ainda tem gente que faz isso. O <span class=\"destaque\">projeto automatizou o download desses dados com o pacote Selenium.</span>",
        'proj-9-detail':    "Imagina um código que faz <span class=\"destaque\">GIFs para você colocar nas apresentações usando somente latitude e longitude e um período de tempo determinado.</span> O projeto te ajuda com isso, ele <span class=\"destaque\">gera os GIFs com o Google Earth Engine.</span>",
        'proj-10-detail':   "<span class=\"destaque\">Não temos bases de dados de beneficiadoras de algodão com coordenadas georreferenciadas.</span> O projeto <span class=\"destaque\">busca no google as beneficiadoras ativas e puxa a latitude e longitude do link de localização da empresa.</span>",
        'proj-11-detail':   "O projeto inicialmente foi escrito para <span class=\"destaque\">contagem de colônias em placas de Petri</span>, automatizando o processo. Porém <span class=\"destaque\">percebemos que o algoritmo pode ser utilizado para outras aplicações.</span>",
    }
};

// --- applyLang(lang) ---
// Aplica o idioma na página inteira. Recebe 'en' ou 'pt'.
// Faz três coisas:
//   1. Seta data-lang no <html> para o CSS poder reagir ao idioma via [data-lang="pt"]
//   2. Atualiza o atributo lang do <html> para acessibilidade (leitores de tela)
//   3. Percorre TODOS os elementos com data-key e troca o textContent para o idioma
//
// querySelectorAll('[data-key]') seleciona qualquer elemento HTML que tenha
// o atributo data-key — é assim que o sistema funciona sem precisar listar cada elemento.
// strings[lang]?.[key] usa optional chaining (?.) para não quebrar se a chave
// não existir no objeto — evita erro "Cannot read properties of undefined".
function applyLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'pt' ? 'pt-br' : 'en');
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        const text = strings[lang]?.[key];
        // innerHTML (não textContent) para suportar <span class="destaque"> dentro das
        // strings — seguro pois as strings são fixas no código, não vêm de user input.
        if (text !== undefined) el.innerHTML = text;
    });
}

// --- updateBtn(btn, lang) ---
// Atualiza o botão de idioma visualmente e para leitores de tela.
// data-active="pt" ou "en" é usado pelo CSS para acender a opção correta em ciano
// (via seletor [data-active="en"] .opt-en — veja nav.css).
// aria-label dinâmico indica ao leitor de tela QUAL ação o botão vai executar
// ao ser pressionado (sempre o oposto do idioma atual).
function updateBtn(btn, lang) {
    btn.setAttribute('data-active', lang);
    btn.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Trocar para português');
}

// --- setupLangToggle() ---
// Função principal exportada — é chamada por global.js quando a página carrega.
// Responsável por inicializar o sistema de idiomas e registrar o listener de clique.
//
// Fluxo ao carregar a página:
//   1. Busca o botão .lang-toggle no HTML
//   2. Lê o idioma salvo no localStorage ('rithondev-lang') — ou usa 'pt' por padrão
//   3. Aplica o idioma salvo e atualiza o visual do botão
//   4. Registra o evento de clique para trocar o idioma ao clicar
//
// localStorage.getItem() retorna null se a chave não existir (primeira visita).
// O || 'pt' garante que o idioma padrão seja português, nunca undefined.
// 'export' torna esta função importável no global.js com import { setupLangToggle }.
export function setupLangToggle() {
    const btn = document.querySelector('.lang-toggle');
    // Sai imediatamente se não encontrar o botão — evita erro em páginas sem nav
    if (!btn) return;

    // Lê o idioma salvo no navegador; se for a primeira visita, usa 'pt'
    const savedLang = localStorage.getItem('rithondev-lang') || 'pt';
    applyLang(savedLang);
    updateBtn(btn, savedLang);

    btn.addEventListener('click', () => {
        // Lê o idioma ATUAL do atributo data-lang do <html> para calcular o próximo
        const current = document.documentElement.getAttribute('data-lang') || 'en';
        const next = current === 'en' ? 'pt' : 'en';
        applyLang(next);
        updateBtn(btn, next);
        // Salva no localStorage para lembrar a escolha na próxima visita
        localStorage.setItem('rithondev-lang', next);
    });
}
