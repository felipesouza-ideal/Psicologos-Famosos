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
  }
  // Continue com outros psicólogos conforme necessário.
];
