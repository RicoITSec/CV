const THEME_KEY = 'rico-theme';
const LANGUAGE_KEY = 'rico-lang';

const TRANSLATIONS = {
  'Skip to content': {fr:'Aller au contenu', ja:'コンテンツへ移動'},
  'Profile': {fr:'Profil', ja:'プロフィール'},
  'Skills': {fr:'Compétences', ja:'スキル'},
  'Certifications': {fr:'Certifications', ja:'資格'},
  'Projects': {fr:'Projets', ja:'プロジェクト'},
  'Education': {fr:'Formation', ja:'学習・研修'},
  'Dark': {fr:'Sombre', ja:'ダーク'},
  'Light': {fr:'Clair', ja:'ライト'},
  'GitHub ↗': {fr:'GitHub ↗', ja:'GitHub ↗'},
  'OPEN TO JUNIOR CYBERSECURITY · IAM · SOC L1 OPPORTUNITIES · FRANCE · REMOTE · INTERNATIONAL': {fr:'OUVERT AUX OPPORTUNITÉS JUNIOR EN CYBERSÉCURITÉ · IAM · SOC L1 · FRANCE · TÉLÉTRAVAIL · INTERNATIONAL', ja:'ジュニア向けサイバーセキュリティ・IAM・SOC L1職を希望 · フランス · リモート · 海外'},
  'Junior cybersecurity & identity security.': {fr:'Cybersécurité junior & sécurité des identités.', ja:'ジュニア サイバーセキュリティ & IDセキュリティ'},
  'Security-focused junior professional targeting': {fr:'Profil junior orienté sécurité visant des postes en', ja:'セキュリティ分野のジュニア人材として'},
  'cybersecurity': {fr:'cybersécurité', ja:'サイバーセキュリティ'},
  'SOC L1': {fr:'SOC L1', ja:'SOC L1'},
  'and': {fr:'et', ja:'および'},
  'IAM / identity security': {fr:'IAM / sécurité des identités', ja:'IAM / IDセキュリティ'},
  'roles. Google Cybersecurity certified and currently progressing through Microsoft Cybersecurity Analyst training, with hands-on projects in incident response, access control, Linux, SQL and Python. A web-development background adds practical application and troubleshooting context.': {fr:'Google Cybersecurity certifié et actuellement en formation Microsoft Cybersecurity Analyst, avec des projets pratiques en réponse aux incidents, contrôle d’accès, Linux, SQL et Python. Mon expérience en développement web apporte un contexte concret sur les applications et le dépannage.', ja:'の職種を目指しています。Google Cybersecurity認定を取得し、現在Microsoft Cybersecurity Analystを学習中です。インシデント対応、アクセス制御、Linux、SQL、Pythonの実践プロジェクトに取り組んでおり、Web開発の経験もアプリケーション理解とトラブルシューティングに活かしています。'},
  'View selected projects': {fr:'Voir les projets sélectionnés', ja:'主なプロジェクトを見る'},
  'Cybersecurity portfolio ↗': {fr:'Portfolio cybersécurité ↗', ja:'サイバーセキュリティ・ポートフォリオ ↗'},
  'Print / Save PDF ↓': {fr:'Imprimer / Enregistrer en PDF ↓', ja:'印刷 / PDF保存 ↓'},
  'Portfolio PDF': {fr:'Portfolio PDF', ja:'ポートフォリオPDF'},
  'Target roles': {fr:'Postes visés', ja:'希望職種'},
  'Security toolkit': {fr:'Outils sécurité', ja:'セキュリティツール'},
  'Linux · SQL · Python · Network Analysis': {fr:'Linux · SQL · Python · Analyse réseau', ja:'Linux · SQL · Python · ネットワーク分析'},
  'Development': {fr:'Développement', ja:'開発'},
  'Open to junior cybersecurity / IAM roles': {fr:'Ouvert aux postes junior cybersécurité / IAM', ja:'ジュニア サイバーセキュリティ / IAM職を希望'},
  'Junior Cybersecurity Analyst · IAM / Identity Security · Web Development Background': {fr:'Analyste cybersécurité junior · IAM / Sécurité des identités · Expérience en développement web', ja:'ジュニア サイバーセキュリティアナリスト · IAM / IDセキュリティ · Web開発経験'},
  'Security Portfolio': {fr:'Portfolio sécurité', ja:'セキュリティ・ポートフォリオ'},
  'PROFILE': {fr:'PROFIL', ja:'プロフィール'},
  'Security-first, with a practical development foundation.': {fr:'La sécurité d’abord, avec une base pratique en développement.', ja:'セキュリティを軸に、実践的な開発基盤を備えています。'},
  'My primary focus is junior cybersecurity, SOC and identity-security work. My development background supports that goal by giving me practical context around applications, debugging, data flows and the way technical systems are built.': {fr:'Mon objectif principal concerne les postes junior en cybersécurité, SOC et sécurité des identités. Mon expérience en développement soutient cet objectif en m’apportant une compréhension pratique des applications, du débogage, des flux de données et de la construction des systèmes techniques.', ja:'主な目標は、ジュニア向けのサイバーセキュリティ、SOC、IDセキュリティ職です。開発経験により、アプリケーション、デバッグ、データフロー、システム構築の実践的な理解を得ています。'},
  'I work comfortably in structured learning and project environments, with experience across Linux, networking fundamentals, access control, SQL, Python-based automation, responsive interfaces and full-stack web exercises. I am especially interested in teams where I can grow through real operational work, documentation and continuous learning.': {fr:'Je travaille efficacement dans des environnements d’apprentissage et de projet structurés, avec une expérience en Linux, fondamentaux réseau, contrôle d’accès, SQL, automatisation Python, interfaces responsives et exercices web full-stack. Je recherche particulièrement des équipes où je peux progresser grâce à des missions opérationnelles, de la documentation et un apprentissage continu.', ja:'体系的な学習環境やプロジェクトで、Linux、ネットワーク基礎、アクセス制御、SQL、Python自動化、レスポンシブUI、フルスタックWeb演習に取り組んできました。実務、ドキュメント作成、継続学習を通じて成長できるチームに特に関心があります。'},
  'CORE SKILLS': {fr:'COMPÉTENCES CLÉS', ja:'主要スキル'},
  'Core capabilities for junior security and IAM roles.': {fr:'Compétences principales pour les postes junior en sécurité et IAM.', ja:'ジュニア セキュリティ / IAM職に向けた主要スキル。'},
  'Security Operations': {fr:'Opérations de sécurité', ja:'セキュリティ運用'},
  'Incident response · Alert triage · Phishing analysis · IOC analysis · Threat intelligence · SIEM fundamentals · MITRE ATT&CK concepts': {fr:'Réponse aux incidents · Triage des alertes · Analyse phishing · Analyse IOC · Threat intelligence · Fondamentaux SIEM · Concepts MITRE ATT&CK', ja:'インシデント対応 · アラートトリアージ · フィッシング分析 · IOC分析 · 脅威インテリジェンス · SIEM基礎 · MITRE ATT&CK'},
  'IAM & Identity Security': {fr:'IAM & Sécurité des identités', ja:'IAM & IDセキュリティ'},
  'Microsoft Entra ID · RBAC · MFA · SSO · Conditional Access · Least privilege · JML lifecycle · Access reviews · Zero Trust': {fr:'Microsoft Entra ID · RBAC · MFA · SSO · Accès conditionnel · Moindre privilège · Cycle JML · Revues d’accès · Zero Trust', ja:'Microsoft Entra ID · RBAC · MFA · SSO · 条件付きアクセス · 最小権限 · JMLライフサイクル · アクセスレビュー · Zero Trust'},
  'Systems & Investigation': {fr:'Systèmes & Investigation', ja:'システム & 調査'},
  'Web Development': {fr:'Développement web', ja:'Web開発'},
  'HTML5 · CSS3 · JavaScript · ReactJS · Bootstrap · jQuery · PHP · MySQL · WordPress · Responsive design': {fr:'HTML5 · CSS3 · JavaScript · ReactJS · Bootstrap · jQuery · PHP · MySQL · WordPress · Design responsive', ja:'HTML5 · CSS3 · JavaScript · ReactJS · Bootstrap · jQuery · PHP · MySQL · WordPress · レスポンシブデザイン'},
  'UX, AI & Productivity': {fr:'UX, IA & Productivité', ja:'UX・AI・生産性'},
  'Adobe XD · UX/UI fundamentals · Design Thinking · Generative AI · AI-assisted research · Prototyping': {fr:'Adobe XD · Fondamentaux UX/UI · Design Thinking · IA générative · Recherche assistée par IA · Prototypage', ja:'Adobe XD · UX/UI基礎 · Design Thinking · 生成AI · AI支援リサーチ · プロトタイピング'},
  'Professional Strengths': {fr:'Atouts professionnels', ja:'強み'},
  'Critical thinking · Problem solving · Technical documentation · Project management · Teamwork · Communication · Adaptability': {fr:'Esprit critique · Résolution de problèmes · Documentation technique · Gestion de projet · Travail d’équipe · Communication · Adaptabilité', ja:'批判的思考 · 問題解決 · 技術文書 · プロジェクト管理 · チームワーク · コミュニケーション · 適応力'},
  'CERTIFICATIONS': {fr:'CERTIFICATIONS', ja:'資格'},
  'Focused on employable cybersecurity and AI skills.': {fr:'Des compétences cybersécurité et IA orientées employabilité.', ja:'就職につながるサイバーセキュリティとAIスキルに注力。'},
  'Completed': {fr:'Terminé', ja:'修了'},
  'Google / Coursera · September 2026': {fr:'Google / Coursera · Septembre 2026', ja:'Google / Coursera · 2026年9月'},
  'In progress': {fr:'En cours', ja:'進行中'},
  'Microsoft / Coursera · Current focus': {fr:'Microsoft / Coursera · Priorité actuelle', ja:'Microsoft / Coursera · 現在の重点'},
  'App building · Data analysis · Content · Writing & communication · Planning · August 2026': {fr:'Création d’applications · Analyse de données · Contenu · Rédaction & communication · Planification · Août 2026', ja:'アプリ構築 · データ分析 · コンテンツ · ライティング＆コミュニケーション · 計画 · 2026年8月'},
  'SELECTED WORK': {fr:'PROJETS SÉLECTIONNÉS', ja:'主な実績'},
  'Projects that show practical ability.': {fr:'Des projets qui démontrent des compétences pratiques.', ja:'実践力を示すプロジェクト。'},
  'View all repositories ↗': {fr:'Voir tous les dépôts ↗', ja:'すべてのリポジトリを見る ↗'},
  'CYBERSECURITY PORTFOLIO': {fr:'PORTFOLIO CYBERSÉCURITÉ', ja:'サイバーセキュリティ・ポートフォリオ'},
  'Identity Security, Incident Response & Security Operations': {fr:'Sécurité des identités, réponse aux incidents & opérations de sécurité', ja:'IDセキュリティ・インシデント対応・セキュリティ運用'},
  'A dedicated portfolio covering Microsoft Entra ID migration strategy, access-control investigation, phishing response, malware and threat-intelligence analysis, network segmentation and security automation.': {fr:'Un portfolio dédié couvrant la stratégie de migration Microsoft Entra ID, les investigations de contrôle d’accès, la réponse au phishing, l’analyse malware et threat intelligence, la segmentation réseau et l’automatisation sécurité.', ja:'Microsoft Entra ID移行戦略、アクセス制御調査、フィッシング対応、マルウェア／脅威インテリジェンス分析、ネットワーク分離、セキュリティ自動化をまとめた専用ポートフォリオです。'},
  'Live portfolio ↗': {fr:'Portfolio en ligne ↗', ja:'ライブ・ポートフォリオ ↗'},
  'Repository ↗': {fr:'Dépôt ↗', ja:'リポジトリ ↗'},
  'FULL-STACK': {fr:'FULL-STACK', ja:'フルスタック'},
  'Dynamic restaurant application with PHP, PDO/MySQL, CRUD administration, prepared statements and image uploads.': {fr:'Application de restaurant dynamique avec PHP, PDO/MySQL, administration CRUD, requêtes préparées et upload d’images.', ja:'PHP、PDO/MySQL、CRUD管理、プリペアドステートメント、画像アップロードを備えた動的レストランアプリ。'},
  'View project ↗': {fr:'Voir le projet ↗', ja:'プロジェクトを見る ↗'},
  'FRONT-END': {fr:'FRONT-END', ja:'フロントエンド'},
  'Responsive multi-page restaurant interface built with semantic HTML, Sass, animations and interactive visual states.': {fr:'Interface restaurant multi-pages responsive réalisée en HTML sémantique, Sass, animations et états visuels interactifs.', ja:'セマンティックHTML、Sass、アニメーション、インタラクティブなUI状態で構築したレスポンシブな複数ページのレストランUI。'},
  'SEO · ACCESSIBILITY': {fr:'SEO · ACCESSIBILITÉ', ja:'SEO · アクセシビリティ'},
  'Website optimization project focused on SEO structure, accessibility-oriented markup, responsiveness and front-end cleanup.': {fr:'Projet d’optimisation de site axé sur la structure SEO, le balisage accessible, le responsive et le nettoyage front-end.', ja:'SEO構造、アクセシビリティを意識したマークアップ、レスポンシブ対応、フロントエンド改善に注力した最適化プロジェクト。'},
  'JAVASCRIPT': {fr:'JAVASCRIPT', ja:'JAVASCRIPT'},
  'Canvas game with keyboard controls, collision detection, scoring, randomized apple generation and restart logic.': {fr:'Jeu Canvas avec commandes clavier, détection des collisions, score, génération aléatoire de pommes et logique de redémarrage.', ja:'キーボード操作、衝突判定、スコア、ランダムなリンゴ生成、リスタート処理を実装したCanvasゲーム。'},
  'RESPONSIVE UI': {fr:'INTERFACE RESPONSIVE', ja:'レスポンシブUI'},
  'Responsive accommodation interface with navigation, filters, search patterns, cards and multi-section page layout.': {fr:'Interface d’hébergement responsive avec navigation, filtres, recherche, cartes et mise en page multi-sections.', ja:'ナビゲーション、フィルター、検索UI、カード、複数セクション構成を備えたレスポンシブ宿泊施設UI。'},
  'ONGOING': {fr:'EN COURS', ja:'進行中'},
  'Continuous learning': {fr:'Apprentissage continu', ja:'継続学習'},
  'Current development is focused on Microsoft cybersecurity, identity security, SOC workflows and strengthening the technical portfolio.': {fr:'Le développement actuel se concentre sur la cybersécurité Microsoft, la sécurité des identités, les workflows SOC et le renforcement du portfolio technique.', ja:'現在はMicrosoftセキュリティ、IDセキュリティ、SOCワークフロー、技術ポートフォリオの強化に注力しています。'},
  'Follow on GitHub ↗': {fr:'Suivre sur GitHub ↗', ja:'GitHubで見る ↗'},
  'EDUCATION & TRAINING': {fr:'FORMATION & APPRENTISSAGE', ja:'学習・研修'},
  'Web, information systems and continuous technical learning.': {fr:'Web, systèmes d’information et apprentissage technique continu.', ja:'Web、情報システム、継続的な技術学習。'},
  'Cybersecurity & AI specialization': {fr:'Spécialisation cybersécurité & IA', ja:'サイバーセキュリティ & AI 専門学習'},
  'Web Development & UX': {fr:'Développement web & UX', ja:'Web開発 & UX'},
  'Web development · Adobe XD / UX Design · Design Thinking · Digital Marketing': {fr:'Développement web · Adobe XD / UX Design · Design Thinking · Marketing digital', ja:'Web開発 · Adobe XD / UX Design · Design Thinking · デジタルマーケティング'},
  'Information Systems & Management': {fr:'Systèmes d’information & Management', ja:'情報システム & マネジメント'},
  'Information systems · Team management · Marketing · Japanese language studies': {fr:'Systèmes d’information · Management d’équipe · Marketing · Études de japonais', ja:'情報システム · チームマネジメント · マーケティング · 日本語学習'},
  'LANGUAGES': {fr:'LANGUES', ja:'言語'},
  'International profile': {fr:'Profil international', ja:'国際的なプロフィール'},
  'French': {fr:'Français', ja:'フランス語'},
  'Native': {fr:'Langue maternelle', ja:'母語'},
  'English': {fr:'Anglais', ja:'英語'},
  'Fluent': {fr:'Courant', ja:'流暢'},
  'Japanese': {fr:'Japonais', ja:'日本語'},
  'Intermediate': {fr:'Intermédiaire', ja:'中級'},
  'Italian': {fr:'Italien', ja:'イタリア語'},
  'Basic': {fr:'Notions', ja:'基礎'},
  "LET'S CONNECT": {fr:'CONTACT', ja:'コンタクト'},
  'Looking for a junior cybersecurity or IAM profile with a broader technical foundation?': {fr:'Vous recherchez un profil junior en cybersécurité ou IAM avec une base technique plus large ?', ja:'幅広い技術基盤を持つジュニア サイバーセキュリティ / IAM人材をお探しですか？'},
  'Explore the repositories and security portfolio for practical examples of my work.': {fr:'Consultez les dépôts et le portfolio sécurité pour découvrir des exemples pratiques de mon travail.', ja:'実践的な成果は、リポジトリとセキュリティ・ポートフォリオをご覧ください。'},
  'GitHub profile ↗': {fr:'Profil GitHub ↗', ja:'GitHubプロフィール ↗'},
  'Security portfolio ↗': {fr:'Portfolio sécurité ↗', ja:'セキュリティ・ポートフォリオ ↗'},
  '© 2026 Richard · Cybersecurity · IAM · Web Development': {fr:'© 2026 Richard · Cybersécurité · IAM · Développement web', ja:'© 2026 Richard · サイバーセキュリティ · IAM · Web開発'},
  'Back to top ↑': {fr:'Retour en haut ↑', ja:'ページ上部へ ↑'}
};

const COMPLETE_TRANSLATIONS = {
  'Richard | Junior Cybersecurity & IAM Analyst · Web Development': {fr:'Richard | Analyste cybersécurité junior & IAM · Développement web', ja:'Richard | ジュニア サイバーセキュリティ・IAMアナリスト · Web開発'},
  'R': {fr:'R', ja:'R'},
  'Richard': {fr:'Richard', ja:'Richard'},
  '.': {fr:'.', ja:'.'},
  'FR': {fr:'FR', ja:'FR'},
  'EN': {fr:'EN', ja:'EN'},
  'JP': {fr:'JP', ja:'JP'},
  '☾': {fr:'☾', ja:'☾'},
  '☀': {fr:'☀', ja:'☀'},
  ',': {fr:',', ja:'、'},
  'SOC L1 · IAM · Cybersecurity': {fr:'SOC L1 · IAM · Cybersécurité', ja:'SOC L1 · IAM · サイバーセキュリティ'},
  'JavaScript · React · PHP · MySQL': {fr:'JavaScript · React · PHP · MySQL', ja:'JavaScript · React · PHP · MySQL'},
  'GitHub': {fr:'GitHub', ja:'GitHub'},
  '01': {fr:'01', ja:'01'},
  '02': {fr:'02', ja:'02'},
  '03': {fr:'03', ja:'03'},
  '04': {fr:'04', ja:'04'},
  '05': {fr:'05', ja:'05'},
  '06': {fr:'06', ja:'06'},
  'Linux · Bash · Windows · TCP/IP · Wireshark · tcpdump · VirusTotal · SQL / MariaDB · Python · Git': {fr:'Linux · Bash · Windows · TCP/IP · Wireshark · tcpdump · VirusTotal · SQL / MariaDB · Python · Git', ja:'Linux · Bash · Windows · TCP/IP · Wireshark · tcpdump · VirusTotal · SQL / MariaDB · Python · Git'},
  'Google Cybersecurity Professional Certificate': {fr:'Google Cybersecurity Professional Certificate', ja:'Google Cybersecurity Professional Certificate'},
  'Microsoft Cybersecurity Analyst Professional Certificate': {fr:'Microsoft Cybersecurity Analyst Professional Certificate', ja:'Microsoft Cybersecurity Analyst Professional Certificate'},
  'Google AI': {fr:'Google AI', ja:'Google AI'},
  'IAM': {fr:'IAM', ja:'IAM'},
  'Entra ID': {fr:'Entra ID', ja:'Entra ID'},
  'Incident Response': {fr:'Réponse aux incidents', ja:'インシデント対応'},
  'Linux': {fr:'Linux', ja:'Linux'},
  'Python': {fr:'Python', ja:'Python'},
  'SQL': {fr:'SQL', ja:'SQL'},
  'Burger Code': {fr:'Burger Code', ja:'Burger Code'},
  'PHP': {fr:'PHP', ja:'PHP'},
  'MySQL': {fr:'MySQL', ja:'MySQL'},
  'PDO': {fr:'PDO', ja:'PDO'},
  'CRUD': {fr:'CRUD', ja:'CRUD'},
  'OhMyFood': {fr:'OhMyFood', ja:'OhMyFood'},
  'HTML5': {fr:'HTML5', ja:'HTML5'},
  'CSS3': {fr:'CSS3', ja:'CSS3'},
  'Sass': {fr:'Sass', ja:'Sass'},
  'Responsive': {fr:'Responsive', ja:'レスポンシブ'},
  'La Chouette Agence': {fr:'La Chouette Agence', ja:'La Chouette Agence'},
  'SEO': {fr:'SEO', ja:'SEO'},
  'Accessibility': {fr:'Accessibilité', ja:'アクセシビリティ'},
  'Bootstrap': {fr:'Bootstrap', ja:'Bootstrap'},
  'JavaScript': {fr:'JavaScript', ja:'JavaScript'},
  'Snake': {fr:'Snake', ja:'Snake'},
  'Canvas': {fr:'Canvas', ja:'Canvas'},
  'Game logic': {fr:'Logique de jeu', ja:'ゲームロジック'},
  'DOM events': {fr:'Événements DOM', ja:'DOMイベント'},
  'Reservia': {fr:'Reservia', ja:'Reservia'},
  'UI integration': {fr:'Intégration UI', ja:'UI実装'},
  '+': {fr:'+', ja:'+'},
  '2026': {fr:'2026', ja:'2026'},
  '2021': {fr:'2021', ja:'2021'},
  '2020': {fr:'2020', ja:'2020'},
  'Google Cybersecurity · Microsoft Cybersecurity Analyst · Google AI': {fr:'Google Cybersecurity · Microsoft Cybersecurity Analyst · Google AI', ja:'Google Cybersecurity · Microsoft Cybersecurity Analyst · Google AI'}
};
Object.assign(TRANSLATIONS, COMPLETE_TRANSLATIONS);

const ACCESSIBILITY_I18N = {
  en: {home:'Home', nav:'Primary navigation', language:'Language', highlights:'Professional highlights', profile:'Professional profile'},
  fr: {home:'Accueil', nav:'Navigation principale', language:'Langue', highlights:'Points forts professionnels', profile:'Profil professionnel'},
  ja: {home:'ホーム', nav:'メインナビゲーション', language:'言語', highlights:'プロフェッショナル概要', profile:'プロフィール'}
};


Object.assign(TRANSLATIONS, {
  'Junior Cybersecurity Analyst · IAM / Identity Security · SOC L1': {fr:'Analyste cybersécurité junior · IAM / Sécurité des identités · SOC L1', ja:'ジュニア サイバーセキュリティアナリスト · IAM / IDセキュリティ · SOC L1'},
  'Google Cybersecurity certified and currently progressing through the Microsoft Cybersecurity Analyst Professional Certificate. Hands-on work includes Microsoft Entra ID and access control, phishing and malware investigation, network segmentation, Linux permissions, SQL security queries and Python automation. Web-development experience adds practical application and troubleshooting context.': {fr:'Certifié Google Cybersecurity et actuellement en cours de Microsoft Cybersecurity Analyst Professional Certificate. Les travaux pratiques couvrent Microsoft Entra ID et le contrôle d’accès, l’investigation phishing et malware, la segmentation réseau, les permissions Linux, les requêtes SQL de sécurité et l’automatisation Python. L’expérience en développement web apporte un contexte concret sur les applications et le dépannage.', ja:'Google Cybersecurity認定を取得し、現在Microsoft Cybersecurity Analyst Professional Certificateを学習中です。実践内容はMicrosoft Entra IDとアクセス制御、フィッシング／マルウェア調査、ネットワーク分離、Linux権限、セキュリティ向けSQLクエリ、Python自動化を含みます。Web開発経験は、アプリケーション理解とトラブルシューティングにも活かしています。'},
  'Credential': {fr:'Certification', ja:'資格'},
  'Google Cybersecurity · Completed': {fr:'Google Cybersecurity · Terminé', ja:'Google Cybersecurity · 修了'},
  'Security focus': {fr:'Axes sécurité', ja:'セキュリティ領域'},
  'IAM · SOC L1 · Incident Response': {fr:'IAM · SOC L1 · Réponse aux incidents', ja:'IAM · SOC L1 · インシデント対応'},
  'Technical foundation': {fr:'Fondations techniques', ja:'技術基盤'},
  'Open to junior cybersecurity / IAM / SOC L1 roles': {fr:'Ouvert aux postes junior en cybersécurité / IAM / SOC L1', ja:'ジュニア サイバーセキュリティ / IAM / SOC L1職を希望'},
  'Security-first, evidence-driven and ready to grow in operations.': {fr:'La sécurité d’abord, des preuves concrètes et une volonté de progresser en opérations.', ja:'セキュリティを軸に、実践の証拠を積み上げ、運用で成長する準備があります。'},
  'My focus is junior cybersecurity, SOC L1 and identity-security work. I use structured investigation, clear documentation and hands-on labs to turn security concepts into evidence: access-control analysis, phishing triage, threat intelligence, Linux permissions, SQL investigation and Python automation.': {fr:'Mon objectif concerne les postes junior en cybersécurité, SOC L1 et sécurité des identités. J’utilise une investigation structurée, une documentation claire et des labs pratiques pour transformer les concepts de sécurité en preuves concrètes : analyse des contrôles d’accès, triage phishing, threat intelligence, permissions Linux, investigations SQL et automatisation Python.', ja:'ジュニア向けサイバーセキュリティ、SOC L1、IDセキュリティ職を目指しています。体系的な調査、明確なドキュメント、実践ラボを通じて、アクセス制御分析、フィッシングトリアージ、脅威インテリジェンス、Linux権限、SQL調査、Python自動化を成果として示しています。'},
  'A web-development background adds practical context around applications, data flows, debugging and secure-by-design thinking. I am targeting teams where I can contribute, learn quickly and grow through real operational work.': {fr:'Mon expérience en développement web apporte un contexte pratique sur les applications, les flux de données, le débogage et l’approche secure-by-design. Je vise des équipes où je peux contribuer, apprendre rapidement et progresser grâce à un travail opérationnel réel.', ja:'Web開発の経験により、アプリケーション、データフロー、デバッグ、セキュア・バイ・デザインの考え方を実践的に理解しています。貢献しながら素早く学び、実運用を通じて成長できるチームを志望しています。'}
});

const PAGE_META = {
  en: {
    title:'Richard | Junior Cybersecurity Analyst · IAM / Identity Security · SOC L1',
    description:'Junior Cybersecurity Analyst focused on IAM, identity security and SOC L1, with Google Cybersecurity certification and hands-on Entra ID, incident response, Linux, SQL and Python projects.'
  },
  fr: {
    title:'Richard | Analyste cybersécurité junior · IAM / Sécurité des identités · SOC L1',
    description:'Analyste cybersécurité junior orienté IAM, sécurité des identités et SOC L1, avec certification Google Cybersecurity et projets pratiques Entra ID, réponse aux incidents, Linux, SQL et Python.'
  },
  ja: {
    title:'Richard | ジュニア サイバーセキュリティアナリスト · IAM / IDセキュリティ · SOC L1',
    description:'IAM、IDセキュリティ、SOC L1を中心に、Google Cybersecurity認定とEntra ID、インシデント対応、Linux、SQL、Pythonの実践プロジェクトを持つジュニア サイバーセキュリティプロフィール。'
  }
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || (navigator.language.toLowerCase().startsWith('fr') ? 'fr' : navigator.language.toLowerCase().startsWith('ja') ? 'ja' : 'en');
const originalText = new WeakMap();

function t(key) {
  if (currentLanguage === 'en') return key;
  return TRANSLATIONS[key]?.[currentLanguage] || key;
}

function translateTextNodes(language) {
  currentLanguage = language;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ['SCRIPT','STYLE','NOSCRIPT'].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.textContent.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach(node => {
    if (!originalText.has(node)) originalText.set(node, node.textContent);
    const original = originalText.get(node);
    const trimmed = original.trim();
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    const translated = language === 'en' ? trimmed : (TRANSLATIONS[trimmed]?.[language] || trimmed);
    node.textContent = leading + translated + trailing;
  });
}

function applyLanguage(language) {
  if (!['en','fr','ja'].includes(language)) language = 'en';
  currentLanguage = language;
  document.documentElement.lang = language;
  translateTextNodes(language);

  document.querySelectorAll('.lang-button').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === language));
  });

  const meta = PAGE_META[language];
  if (meta) {
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', meta.description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);
    if (ogDescription) ogDescription.setAttribute('content', meta.description);
  }

  const a11y = ACCESSIBILITY_I18N[language] || ACCESSIBILITY_I18N.en;
  document.querySelector('.brand')?.setAttribute('aria-label', a11y.home);
  document.querySelector('.nav')?.setAttribute('aria-label', a11y.nav);
  document.querySelector('.language-switcher')?.setAttribute('aria-label', a11y.language);
  document.querySelector('.proof-row')?.setAttribute('aria-label', a11y.highlights);
  document.querySelector('.profile-card')?.setAttribute('aria-label', a11y.profile);

  const photo = document.querySelector('.profile-photo');
  if (photo) {
    photo.alt = language === 'fr' ? 'Richard - photo professionnelle' :
      language === 'ja' ? 'Richard - プロフィール写真' :
      'Richard - professional profile';
  }

  applyTheme(document.documentElement.dataset.theme || 'light');
}

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = theme;

  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.setAttribute('aria-pressed', String(isDark));
    const lightText = t('Light');
    const darkText = t('Dark');
    toggle.setAttribute('aria-label',
      currentLanguage === 'fr'
        ? (isDark ? 'Passer au thème clair' : 'Passer au thème sombre')
        : currentLanguage === 'ja'
          ? (isDark ? 'ライトテーマに切り替え' : 'ダークテーマに切り替え')
          : (isDark ? 'Switch to light theme' : 'Switch to dark theme'));

    const icon = toggle.querySelector('.theme-icon');
    const label = toggle.querySelector('.theme-label');
    if (icon) icon.textContent = isDark ? '☀' : '☾';
    if (label) label.textContent = isDark ? lightText : darkText;
  }

  const meta = document.getElementById('theme-color-meta');
  if (meta) meta.setAttribute('content', isDark ? '#08111f' : '#f5f5dc');
}

document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLanguage);

  document.querySelectorAll('.lang-button').forEach(button => {
    button.addEventListener('click', () => {
      const language = button.dataset.lang;
      localStorage.setItem(LANGUAGE_KEY, language);
      applyLanguage(language);
    });
  });

  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  const savePdfButton = document.getElementById('save-pdf');
  if (savePdfButton) {
    savePdfButton.addEventListener('click', () => window.print());
  }
});

window.addEventListener('storage', (event) => {
  if (event.key === THEME_KEY && (event.newValue === 'light' || event.newValue === 'dark')) {
    applyTheme(event.newValue);
  }
  if (event.key === LANGUAGE_KEY && ['en','fr','ja'].includes(event.newValue)) {
    applyLanguage(event.newValue);
  }
});
