let dados = [
  {
    titulo: "Sigmund Freud",
    descricao: "Considerado o pai da psicanálise, Freud desenvolveu teorias revolucionárias sobre o inconsciente e a mente humana. Ele introduziu conceitos como o id, ego e superego, além de explorar os sonhos como janelas para o subconsciente.",
    link: "https://pt.wikipedia.org/wiki/Sigmund_Freud",
    tags: "psicanálise inconsciente psicologia terapia"
  },
  {
    titulo: "Carl Jung",
    descricao: "Psicólogo suíço e fundador da psicologia analítica. Jung explorou os conceitos de arquétipos e o inconsciente coletivo, influenciando diversas áreas como religião, mitologia e arte.",
    link: "https://pt.wikipedia.org/wiki/Carl_Jung",
    tags: "psicologia analítica arquétipos inconsciente coletivo"
  },
  {
    titulo: "B. F. Skinner",
    descricao: "Psicólogo behaviorista americano, famoso por seus experimentos com o condicionamento operante. Skinner acreditava que o comportamento humano podia ser modificado através de reforços e punições.",
    link: "https://pt.wikipedia.org/wiki/B._F._Skinner",
    tags: "behaviorismo condicionamento operante psicologia experimental"
  },
  {
    titulo: "Jean Piaget",
    descricao: "Psicólogo suíço conhecido por seus estudos sobre o desenvolvimento cognitivo em crianças. Ele propôs uma teoria de quatro estágios do desenvolvimento, influenciando a educação infantil em todo o mundo.",
    link: "https://pt.wikipedia.org/wiki/Jean_Piaget",
    tags: "desenvolvimento cognitivo educação infantil epistemologia genética"
  },
  {
    titulo: "Ivan Pavlov",
    descricao: "Fisiologista russo cujos experimentos com cães pavimentaram o caminho para a teoria do condicionamento clássico. Sua pesquisa sobre reflexos condicionados impactou tanto a psicologia quanto a medicina.",
    link: "https://pt.wikipedia.org/wiki/Ivan_Pavlov",
    tags: "condicionamento clássico reflexos psicologia experimental"
  },
  {
    titulo: "Alfred Adler",
    descricao: "Fundador da psicologia individual, Adler focou na importância do sentimento de inferioridade e da busca por superioridade como forças motrizes do comportamento humano.",
    link: "https://pt.wikipedia.org/wiki/Alfred_Adler",
    tags: "psicologia individual sentimento de inferioridade psicoterapia"
  },
  {
    titulo: "Erik Erikson",
    descricao: "Erikson é conhecido por sua teoria do desenvolvimento psicossocial, que propõe oito estágios de crescimento que abrangem desde o nascimento até a velhice.",
    link: "https://pt.wikipedia.org/wiki/Erik_Erikson",
    tags: "desenvolvimento psicossocial estágios psicologia do desenvolvimento"
  },
  {
    titulo: "Abraham Maslow",
    descricao: "Psicólogo humanista, Maslow desenvolveu a hierarquia das necessidades, uma teoria que descreve os níveis de necessidades humanas desde as básicas até a autorrealização.",
    link: "https://pt.wikipedia.org/wiki/Abraham_Maslow",
    tags: "psicologia humanista hierarquia das necessidades autorrealização"
  },
  {
    titulo: "Carl Rogers",
    descricao: "Psicólogo humanista que desenvolveu a abordagem centrada na pessoa. Ele acreditava no potencial inerente ao ser humano e na importância da empatia e aceitação incondicional na terapia.",
    link: "https://pt.wikipedia.org/wiki/Carl_Rogers",
    tags: "psicologia humanista terapia centrada na pessoa empatia"
  },
  {
    titulo: "William James",
    descricao: "Considerado o pai da psicologia americana, William James foi pioneiro na psicologia funcional e no estudo das emoções, além de explorar a relação entre a mente e o corpo.",
    link: "https://pt.wikipedia.org/wiki/William_James",
    tags: "psicologia funcional pragmatismo estudo das emoções"
  },
  {
    titulo: "Lev Vygotsky",
    descricao: "Psicólogo russo conhecido por sua teoria sociocultural, Vygotsky enfatizou o papel do ambiente social e da linguagem no desenvolvimento cognitivo.",
    link: "https://pt.wikipedia.org/wiki/Lev_Vygotsky",
    tags: "teoria sociocultural desenvolvimento cognitivo linguagem"
  },
  {
    titulo: "John B. Watson",
    descricao: "Um dos fundadores do behaviorismo, Watson acreditava que o comportamento humano podia ser previsto e controlado, negando a importância de processos mentais internos.",
    link: "https://pt.wikipedia.org/wiki/John_B._Watson",
    tags: "behaviorismo psicologia experimental comportamento"
  },
  {
    titulo: "Albert Bandura",
    descricao: "Conhecido por sua teoria da aprendizagem social, Bandura enfatizou a importância da observação e imitação no desenvolvimento de comportamentos, como visto em seu famoso experimento com o boneco Bobo.",
    link: "https://pt.wikipedia.org/wiki/Albert_Bandura",
    tags: "aprendizagem social imitação teoria do comportamento"
  },
  {
    titulo: "Viktor Frankl",
    descricao: "Criador da logoterapia, Frankl acreditava que a busca por sentido na vida é a principal força motivacional do ser humano. Seu trabalho foi influenciado por sua experiência em campos de concentração nazistas.",
    link: "https://pt.wikipedia.org/wiki/Viktor_Frankl",
    tags: "logoterapia sentido da vida psicoterapia existencial"
  },
  {
    titulo: "Rollo May",
    descricao: "Psicólogo existencialista, Rollo May focou em questões como o medo, a ansiedade e a busca por significado, contribuindo significativamente para a psicoterapia existencial.",
    link: "https://pt.wikipedia.org/wiki/Rollo_May",
    tags: "psicologia existencial ansiedade medo"
  },
  {
    titulo: "Karen Horney",
    descricao: "Psicanalista alemã que desafiou algumas das ideias de Freud, especialmente no que se refere à psicologia feminina. Horney propôs que a cultura, mais do que a biologia, molda a personalidade.",
    link: "https://pt.wikipedia.org/wiki/Karen_Horney",
    tags: "psicanálise psicologia feminina cultura"
  },
  {
    titulo: "Melanie Klein",
    descricao: "Psicanalista britânica que contribuiu para a teoria do desenvolvimento infantil, Klein é conhecida por suas ideias sobre a fantasia inconsciente e a importância das relações objetais.",
    link: "https://pt.wikipedia.org/wiki/Melanie_Klein",
    tags: "psicanálise desenvolvimento infantil relações objetais"
  },
  {
    titulo: "Jacques Lacan",
    descricao: "Psicanalista francês cujas ideias influenciaram campos como a filosofia e a literatura. Lacan reinterpretou a obra de Freud, destacando a importância da linguagem no inconsciente.",
    link: "https://pt.wikipedia.org/wiki/Jacques_Lacan",
    tags: "psicanálise linguagem inconsciente"
  },
  {
    titulo: "Elizabeth Loftus",
    descricao: "Psicóloga americana famosa por seus estudos sobre memória, especialmente a memória falsa. Seus trabalhos têm grande impacto na psicologia forense e no sistema legal.",
    link: "https://pt.wikipedia.org/wiki/Elizabeth_Loftus",
    tags: "memória falsa psicologia forense memória"
  },
  {
    titulo: "Hans Eysenck",
    descricao: "Psicólogo britânico que desenvolveu teorias de traços de personalidade, Eysenck também foi um dos maiores críticos da psicanálise, defendendo uma abordagem científica na psicologia.",
    link: "https://pt.wikipedia.org/wiki/Hans_Eysenck",
    tags: "personalidade traços psicologia científica"
  },
  {
    titulo: "John Bowlby",
    descricao: "Psicólogo britânico, Bowlby é conhecido por sua teoria do apego, que descreve a importância dos vínculos emocionais na infância e seus impactos no desenvolvimento emocional.",
    link: "https://pt.wikipedia.org/wiki/John_Bowlby",
    tags: "teoria do apego desenvolvimento emocional vínculos"
  },
  {
    titulo: "Mary Ainsworth",
    descricao: "Colaboradora de John Bowlby, Ainsworth desenvolveu a técnica do 'estranho' para estudar o apego em crianças. Seu trabalho ampliou a compreensão sobre os tipos de apego.",
    link: "https://pt.wikipedia.org/wiki/Mary_Ainsworth",
    tags: "teoria do apego desenvolvimento infantil vínculo emocional"
  },
  {
    titulo: "Stanley Milgram",
    descricao: "Psicólogo social americano, famoso por seus experimentos sobre obediência à autoridade. Suas pesquisas revelaram como pessoas comuns podem cometer atos extremos sob ordens.",
    link: "https://pt.wikipedia.org/wiki/Stanley_Milgram",
    tags: "obediência autoridade psicologia social"
  },
  {
    titulo: "Philip Zimbardo",
    descricao: "Conhecido pelo controverso Experimento da Prisão de Stanford, Zimbardo explorou como as circunstâncias podem influenciar o comportamento humano, levando indivíduos comuns a cometer atos incomuns.",
    link: "https://pt.wikipedia.org/wiki/Philip_Zimbardo",
    tags: "psicologia social comportamento experimento prisao de stanford"
  },
  {
    titulo: "Noam Chomsky",
    descricao: "Lingüista e psicólogo cognitivo, Chomsky revolucionou a psicologia da linguagem com sua teoria da gramática gerativa, argumentando que a capacidade linguística é inata aos seres humanos.",
    link: "https://pt.wikipedia.org/wiki/Noam_Chomsky",
    tags: "linguística psicologia cognitiva gramática gerativa"
  },
  {
    titulo: "Anna Freud",
    descricao: "Filha de Sigmund Freud, Anna Freud desenvolveu a psicanálise infantil e trouxe importantes contribuições para o estudo dos mecanismos de defesa do ego.",
    link: "https://pt.wikipedia.org/wiki/Anna_Freud",
    tags: "psicanálise infantil mecanismos de defesa psicoterapia"
  },
  {
    titulo: "Donald Winnicott",
    descricao: "Psicanalista britânico que contribuiu significativamente para a teoria do desenvolvimento infantil. Ele é conhecido por suas ideias sobre o 'ambiente facilitador' e o 'objeto transicional'.",
    link: "https://pt.wikipedia.org/wiki/Donald_Winnicott",
    tags: "desenvolvimento infantil ambiente facilitador objeto transicional"
  },
  {
    titulo: "Franz Mesmer",
    descricao: "Médico alemão cujas teorias sobre o magnetismo animal foram precursoras da hipnose. Embora controverso, o mesmerismo influenciou a psicoterapia no século XIX.",
    link: "https://pt.wikipedia.org/wiki/Franz_Mesmer",
    tags: "hipnose mesmerismo magnetismo animal"
  },
  {
    titulo: "Wilhelm Wundt",
    descricao: "Considerado o fundador da psicologia experimental, Wundt estabeleceu o primeiro laboratório de psicologia e promoveu a introspecção como método científico para estudar a mente.",
    link: "https://pt.wikipedia.org/wiki/Wilhelm_Wundt",
    tags: "psicologia experimental introspecção mente"
  },
  {
    titulo: "Max Wertheimer",
    descricao: "Psicólogo alemão, fundador da psicologia da Gestalt, Wertheimer estudou como as pessoas percebem padrões e integram estímulos em formas significativas.",
    link: "https://pt.wikipedia.org/wiki/Max_Wertheimer",
    tags: "psicologia da gestalt percepção padrões"
  },
  {
    titulo: "Kurt Lewin",
    descricao: "Psicólogo social que foi pioneiro na teoria de campo e no estudo das dinâmicas de grupo. Ele investigou como o ambiente e as forças sociais afetam o comportamento.",
    link: "https://pt.wikipedia.org/wiki/Kurt_Lewin",
    tags: "psicologia social teoria de campo dinâmicas de grupo"
  },
  {
    titulo: "Hugo Münsterberg",
    descricao: "Psicólogo alemão-americano, conhecido por suas contribuições para a psicologia aplicada, incluindo psicologia industrial e psicologia forense.",
    link: "https://pt.wikipedia.org/wiki/Hugo_M%C3%BCnsterberg",
    tags: "psicologia aplicada psicologia industrial psicologia forense"
  },
  {
    titulo: "Hermann Ebbinghaus",
    descricao: "Psicólogo alemão pioneiro no estudo da memória. Ebbinghaus desenvolveu a famosa curva do esquecimento e investigou como o cérebro processa e retém informações.",
    link: "https://pt.wikipedia.org/wiki/Hermann_Ebbinghaus",
    tags: "memória curva do esquecimento retenção"
  },
  {
    titulo: "George Kelly",
    descricao: "Psicólogo americano, criador da psicologia dos construtos pessoais. Kelly sugeriu que as pessoas constroem e testam teorias sobre o mundo em que vivem.",
    link: "https://pt.wikipedia.org/wiki/George_Kelly_(psychologist)",
    tags: "construtos pessoais psicologia cognitiva construtivismo"
  },
  {
    titulo: "Fritz Perls",
    descricao: "Fundador da terapia Gestalt, Perls promoveu uma abordagem experiencial e holística para a psicoterapia, enfatizando a autoconsciência e o momento presente.",
    link: "https://pt.wikipedia.org/wiki/Fritz_Perls",
    tags: "terapia gestalt autoconsciência psicoterapia experiencial"
  },
 
  {
    titulo: "Francis Galton",
    descricao: "Cientista britânico pioneiro em psicometria e eugenia. Galton foi um dos primeiros a aplicar métodos estatísticos ao estudo das diferenças humanas.",
    link: "https://pt.wikipedia.org/wiki/Francis_Galton",
    tags: "psicometria eugenia diferenças humanas"
  },
  {
    titulo: "Alfred Binet",
    descricao: "Psicólogo francês que desenvolveu o primeiro teste de inteligência, o precursor do teste de QI. Seu trabalho abriu caminho para a psicometria moderna.",
    link: "https://pt.wikipedia.org/wiki/Alfred_Binet",
    tags: "inteligência teste de qi psicometria"
  },
  {
    titulo: "Lewis Terman",
    descricao: "Psicólogo americano que revisou o teste de QI de Binet, criando o famoso teste Stanford-Binet. Terman foi um pioneiro no estudo da inteligência em crianças superdotadas.",
    link: "https://pt.wikipedia.org/wiki/Lewis_Terman",
    tags: "inteligência teste de qi crianças superdotadas"
  },
  {
    titulo: "David Wechsler",
    descricao: "Psicólogo americano que desenvolveu uma série de testes de inteligência amplamente usados, incluindo o WAIS e o WISC, que medem diferentes aspectos do QI.",
    link: "https://pt.wikipedia.org/wiki/David_Wechsler",
    tags: "inteligência teste de qi wais wisc"
  },
  {
    titulo: "Charles Spearman",
    descricao: "Psicólogo britânico que desenvolveu a teoria do fator geral de inteligência, ou 'g'. Spearman sugeriu que a inteligência subjacente pode ser medida como uma única variável.",
    link: "https://pt.wikipedia.org/wiki/Charles_Spearman",
    tags: "inteligência fator g teoria de inteligência"
  },
  {
    titulo: "Howard Gardner",
    descricao: "Psicólogo americano conhecido por sua teoria das inteligências múltiplas, que propõe que a inteligência não é uma única habilidade, mas um conjunto de diferentes capacidades.",
    link: "https://pt.wikipedia.org/wiki/Howard_Gardner",
    tags: "inteligências múltiplas capacidades inteligência emocional"
  },
  {
    titulo: "Robert Sternberg",
    descricao: "Psicólogo americano famoso por sua teoria tríade da inteligência, que foca na interação entre três tipos de inteligência: analítica, criativa e prática.",
    link: "https://pt.wikipedia.org/wiki/Robert_Sternberg",
    tags: "inteligência tríade inteligência analítica criativa prática"
  },
  {
    titulo: "Henry Murray",
    descricao: "Psicólogo americano que desenvolveu a teoria das necessidades e o Teste de Apercepção Temática (TAT), usado para revelar os desejos, medos e outros aspectos inconscientes.",
    link: "https://pt.wikipedia.org/wiki/Henry_Murray",
    tags: "teoria das necessidades tat avaliação projetiva"
  },
  {
    titulo: "Paul Ekman",
    descricao: "Psicólogo americano que é considerado o pioneiro no estudo das emoções e expressões faciais. Ekman catalogou as expressões faciais universais que correspondem a emoções básicas.",
    link: "https://pt.wikipedia.org/wiki/Paul_Ekman",
    tags: "emoções expressões faciais psicologia social"
  },
  {
    titulo: "Daniel Kahneman",
    descricao: "Psicólogo ganhador do Nobel, Kahneman revolucionou a psicologia econômica com sua pesquisa sobre como as pessoas tomam decisões em situações de incerteza.",
    link: "https://pt.wikipedia.org/wiki/Daniel_Kahneman",
    tags: "psicologia econômica tomada de decisão heurísticas"
  }
];
