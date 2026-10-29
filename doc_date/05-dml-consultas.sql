-- Passo 8 — Carga inicial e consultas (PostgreSQL)
-- A planilha não identifica questões bônus, por isso is_bonus fica FALSE para todas até confirmação da equipe.


BEGIN;
-- Inserindo os values das perguntas --
INSERT INTO perguntas (id_pergunta, topico, enunciado, pontos, is_bonus, explicacao) VALUES
    (1, 'Streaming, jogos online e gamification', 'Que tipo de serviço plataformas como Netflix, Disney+ e Spotify oferecem?', 3, FALSE, 'Netflix, Disney+ e Spotify distribuem conteúdo pela internet para reprodução sob demanda.'),
    (2, 'Streaming, jogos online e gamification', 'O que é indispensável para conseguir jogar um jogo online multiplayer?', 3, FALSE, 'O multiplayer online depende da comunicação entre o dispositivo do jogador e os servidores ou demais participantes pela rede.'),
    (3, 'Streaming, jogos online e gamification', 'Como é chamada a aplicação de elementos e dinâmicas de jogos em contextos que não são jogos?', 3, FALSE, 'Gamificação aplica elementos típicos de jogos, como metas, pontos e recompensas, em contextos não lúdicos.'),
    (4, 'Streaming, jogos online e gamification', 'Qual é a principal plataforma voltada para transmissões e streaming de jogos ao vivo?', 3, FALSE, 'A Twitch é conhecida por transmissões ao vivo, especialmente de jogos e eventos relacionados.'),
    (5, 'Streaming, jogos online e gamification', 'Qual recurso das plataformas de streaming permite assistir a conteúdos sem estar conectado à internet?', 3, FALSE, 'O download permite guardar conteúdo no dispositivo para assistir ou ouvir sem conexão ativa.'),
    (6, 'Streaming, jogos online e gamification', 'O que o atraso de conexão (lag) causa nos jogos online competitivos?', 3, FALSE, 'Lag é atraso na comunicação pela rede e pode fazer comandos chegarem tarde ao jogo.'),
    (7, 'Streaming, jogos online e gamification', 'Quais são dois exemplos comuns de elementos visuais usados em gamificação para engajar usuários?', 3, FALSE, 'Rankings e medalhas são elementos de gamificação usados para reconhecer progresso e incentivar participação.'),
    (8, 'Streaming, jogos online e gamification', 'Todos os jogos online são totalmente gratuitos?', 3, FALSE, 'Há jogos pagos, gratuitos com compras internas e modelos por assinatura; nem todos são totalmente gratuitos.'),
    (9, 'Privacidade digital, golpes virtuais e senhas', 'Quais elementos devem ser combinados para criar uma senha forte?', 3, FALSE, 'Combinar diferentes tipos de caracteres e usar senhas longas e exclusivas aumenta a resistência a tentativas de adivinhação.'),
    (10, 'Privacidade digital, golpes virtuais e senhas', 'Por que não se deve reutilizar a mesma senha em múltiplos sites?', 3, FALSE, 'Se uma senha reutilizada vaza, invasores podem tentar usá-la em outros serviços.'),
    (11, 'Privacidade digital, golpes virtuais e senhas', 'Como é chamado o golpe cibernético que engana pessoas para obter dados pessoais ou senhas?', 3, FALSE, 'Phishing usa mensagens ou páginas enganosas para induzir a vítima a revelar informações ou credenciais.'),
    (12, 'Privacidade digital, golpes virtuais e senhas', 'Qual camada extra de verificação aumenta a segurança do acesso às contas online?', 3, FALSE, 'A autenticação de dois fatores exige uma segunda prova de identidade além da senha.'),
    (13, 'Privacidade digital, golpes virtuais e senhas', 'Como devemos agir ao receber links de remetentes desconhecidos em e-mails ou mensagens?', 3, FALSE, 'Links inesperados podem levar a páginas falsas ou downloads maliciosos; verifique o remetente por um canal confiável.'),
    (14, 'Privacidade digital, golpes virtuais e senhas', 'Qual ferramenta ajuda a criar e armazenar senhas complexas e seguras?', 3, FALSE, 'Gerenciadores podem gerar senhas fortes e armazená-las em um cofre protegido.'),
    (15, 'Privacidade digital, golpes virtuais e senhas', 'Onde podem ocorrer golpes virtuais além de e-mails?', 3, FALSE, 'Golpes podem aparecer em várias plataformas digitais, inclusive redes sociais, mensageiros e páginas falsas.'),
    (16, 'Privacidade digital, golpes virtuais e senhas', 'Qual o risco de compartilhar dados pessoais em excesso nas redes sociais?', 3, FALSE, 'Dados excessivos podem ajudar golpistas a personalizar abordagens e responder perguntas de recuperação de contas.'),
    (17, 'Inteligência artificial no dia a dia', 'Que tecnologia permite o funcionamento de assistentes como Siri, Alexa e Google Assistant?', 3, FALSE, 'Assistentes virtuais usam técnicas de IA para interpretar pedidos e produzir respostas ou executar tarefas.'),
    (18, 'Inteligência artificial no dia a dia', 'O que os aplicativos usam para sugerir filmes e músicas personalizados ao usuário?', 3, FALSE, 'Sistemas de recomendação analisam sinais e padrões para sugerir conteúdos que podem interessar ao usuário.'),
    (19, 'Inteligência artificial no dia a dia', 'Como a Inteligência Artificial consegue identificar tendências e fazer previsões?', 3, FALSE, 'Aprendizado de máquina identifica padrões em dados e os usa para estimativas ou classificações.'),
    (20, 'Inteligência artificial no dia a dia', 'Chatbots de atendimento ao cliente utilizam qual tecnologia para responder aos usuários?', 3, FALSE, 'Chatbots podem combinar modelos de IA com técnicas de processamento de linguagem para interpretar e gerar texto.'),
    (21, 'Inteligência artificial no dia a dia', 'Qual recurso de e-mail usa IA para bloquear mensagens indesejadas?', 3, FALSE, 'Filtros de spam classificam mensagens suspeitas ou indesejadas usando regras e, frequentemente, modelos de IA.'),
    (22, 'Inteligência artificial no dia a dia', 'Que tipo de Inteligência Artificial é capaz de gerar novos textos, imagens e áudios a partir de comandos (prompts)?', 3, FALSE, 'IA generativa produz novos conteúdos, como texto, imagem ou áudio, a partir de instruções e contexto.'),
    (23, 'Inteligência artificial no dia a dia', 'Qual tecnologia de IA é amplamente usada para desbloqueio de segurança em smartphones?', 3, FALSE, 'O reconhecimento facial compara características do rosto para auxiliar na autenticação do dispositivo.'),
    (24, 'Inteligência artificial no dia a dia', 'As decisões tomadas por sistemas de Inteligência Artificial são sempre livres de erros?', 3, FALSE, 'Modelos de IA podem errar e reproduzir vieses presentes nos dados de treinamento ou no desenho do sistema.'),
    (25, 'Smartphones, dispositivos mobile e baterias', 'Qual é a tecnologia de bateria mais utilizada nos smartphones atuais?', 3, FALSE, 'Baterias de íons de lítio são amplamente usadas em smartphones por sua densidade de energia e recarregabilidade.'),
    (26, 'Smartphones, dispositivos mobile e baterias', 'Manter o celular sempre carregado em 100% é a melhor prática para preservar a bateria?', 3, FALSE, 'Evitar longos períodos em extremos de carga e calor pode ajudar a reduzir o desgaste da bateria.'),
    (27, 'Smartphones, dispositivos mobile e baterias', 'Para que serve o Modo Avião em um dispositivo móvel?', 3, FALSE, 'O modo avião desativa as conexões de rádio; recursos sem fio podem ser reativados manualmente em alguns aparelhos.'),
    (28, 'Smartphones, dispositivos mobile e baterias', 'Qual tipo de tela consome menos energia ao exibir fundos e cores escuras?', 3, FALSE, 'Em telas OLED/AMOLED, pixels escuros podem emitir menos luz e consumir menos energia que pixels claros.'),
    (29, 'Smartphones, dispositivos mobile e baterias', 'Quais aparelhos, além dos smartphones, se enquadram na categoria de dispositivos mobile?', 3, FALSE, 'Dispositivos móveis incluem aparelhos portáteis como tablets, relógios inteligentes e leitores digitais.'),
    (30, 'Smartphones, dispositivos mobile e baterias', 'Qual o principal impacto do uso frequente de carregamento rápido na bateria?', 3, FALSE, 'O carregamento rápido pode gerar mais calor, e temperaturas elevadas contribuem para o desgaste químico da bateria.'),
    (31, 'Smartphones, dispositivos mobile e baterias', 'Como o nível de brilho da tela impacta a bateria do celular?', 3, FALSE, 'A tela é um dos componentes que pode consumir bastante energia; maior brilho geralmente aumenta esse consumo.'),
    (32, 'Smartphones, dispositivos mobile e baterias', 'Como as atualizações do sistema operacional podem beneficiar a bateria do aparelho?', 3, FALSE, 'Atualizações podem corrigir falhas e melhorar a eficiência, embora o efeito dependa do aparelho e da versão.');

-- Cada pergunta recebe quatro opções, a alternativa correta é marcada em is_correta.
INSERT INTO opcoes (id_pergunta, texto_opcao, is_correta, ordem) VALUES
    (1, 'Serviços de armazenamento local de arquivos', FALSE, 1),
    (1, 'Serviços exclusivos de edição de documentos', FALSE, 2),
    (1, 'Serviços de hospedagem de sites', FALSE, 3),
    (1, 'Serviços de streaming (de áudio e vídeo)', TRUE, 4),
    (2, 'Uma placa de vídeo dedicada', FALSE, 1),
    (2, 'Uma conta em rede social', FALSE, 2),
    (2, 'Conexão com a internet', TRUE, 3),
    (2, 'Um controle sem fio', FALSE, 4),
    (3, 'Desfragmentação', FALSE, 1),
    (3, 'Gamification (ou Gamificação)', TRUE, 2),
    (3, 'Virtualização', FALSE, 3),
    (3, 'Compactação', FALSE, 4),
    (4, 'Twitch', TRUE, 1),
    (4, 'LinkedIn', FALSE, 2),
    (4, 'GitHub', FALSE, 3),
    (4, 'Google Maps', FALSE, 4),
    (5, 'Compartilhamento de tela', FALSE, 1),
    (5, 'Modo desenvolvedor', FALSE, 2),
    (5, 'Sincronização de contatos', FALSE, 3),
    (5, 'Modo offline (ou download de conteúdo)', TRUE, 4),
    (6, 'Melhora automaticamente a resolução', FALSE, 1),
    (6, 'Aumenta a autonomia da bateria', FALSE, 2),
    (6, 'Prejudica o desempenho e tempo de resposta do jogador', TRUE, 3),
    (6, 'Desbloqueia itens pagos', FALSE, 4),
    (7, 'Somente anúncios em vídeo', FALSE, 1),
    (7, 'Sistemas de ranking e medalhas (badges)', TRUE, 2),
    (7, 'Apenas mensagens de erro', FALSE, 3),
    (7, 'Bloqueio de todos os desafios', FALSE, 4),
    (8, 'Não, muitos são pagos ou possuem microtransações', TRUE, 1),
    (8, 'Sim, todos são gratuitos', FALSE, 2),
    (8, 'Sim, desde que sejam online', FALSE, 3),
    (8, 'Não, jogos online nunca são gratuitos', FALSE, 4),
    (9, 'Somente o nome completo', FALSE, 1),
    (9, 'A mesma palavra repetida', FALSE, 2),
    (9, 'Apenas a data de nascimento', FALSE, 3),
    (9, 'Letras maiúsculas, minúsculas, números e caracteres especiais', TRUE, 4),
    (10, 'Facilita lembrar todas as contas', FALSE, 1),
    (10, 'Impede a autenticação de dois fatores', FALSE, 2),
    (10, 'Porque compromete a segurança de todas as contas caso uma seja vazada', TRUE, 3),
    (10, 'Aumenta a velocidade da internet', FALSE, 4),
    (11, 'Desfragmentação', FALSE, 1),
    (11, 'Phishing', TRUE, 2),
    (11, 'Streaming', FALSE, 3),
    (11, 'Bluetooth', FALSE, 4),
    (12, 'Autenticação de dois fatores (2FA)', TRUE, 1),
    (12, 'Modo avião', FALSE, 2),
    (12, 'Compactação de arquivos', FALSE, 3),
    (12, 'Navegação anônima apenas', FALSE, 4),
    (13, 'Clicar para testar o link', FALSE, 1),
    (13, 'Encaminhar para todos os contatos', FALSE, 2),
    (13, 'Responder informando a senha', FALSE, 3),
    (13, 'Não clicar e verificar a procedência da mensagem', TRUE, 4),
    (14, 'Editor de imagens', FALSE, 1),
    (14, 'Reprodutor de vídeo', FALSE, 2),
    (14, 'Gerenciador de senhas', TRUE, 3),
    (14, 'Calculadora simples', FALSE, 4),
    (15, 'Somente em redes cabeadas', FALSE, 1),
    (15, 'Em redes sociais, aplicativos de mensagens e sites falsos', TRUE, 2),
    (15, 'Apenas em lojas físicas', FALSE, 3),
    (15, 'Somente em jogos offline', FALSE, 4),
    (16, 'Aumento dos riscos de invasão de privacidade e engenharia social', TRUE, 1),
    (16, 'Reduz todos os riscos', FALSE, 2),
    (16, 'Garante anonimato total', FALSE, 3),
    (16, 'Impede que dados sejam copiados', FALSE, 4),
    (17, 'Somente GPS', FALSE, 1),
    (17, 'Impressão 3D', FALSE, 2),
    (17, 'Sistema de arquivos', FALSE, 3),
    (17, 'Inteligência Artificial (IA)', TRUE, 4),
    (18, 'Sorteios aleatórios sem dados', FALSE, 1),
    (18, 'Apenas o brilho da tela', FALSE, 2),
    (18, 'Algoritmos de recomendação baseados em IA', TRUE, 3),
    (18, 'Cabos de rede', FALSE, 4),
    (19, 'Ignorando todos os dados', FALSE, 1),
    (19, 'Aprendendo padrões a partir de grandes volumes de dados (Machine Learning)', TRUE, 2),
    (19, 'Usando somente regras de ortografia', FALSE, 3),
    (19, 'Desligando sensores', FALSE, 4),
    (20, 'Inteligência Artificial e Processamento de Linguagem Natural (PLN)', TRUE, 1),
    (20, 'Somente compressão de vídeo', FALSE, 2),
    (20, 'Protocolo de impressão', FALSE, 3),
    (20, 'Sistema de arquivos FAT', FALSE, 4),
    (21, 'Modo noturno', FALSE, 1),
    (21, 'Desfragmentador de disco', FALSE, 2),
    (21, 'Controle de volume', FALSE, 3),
    (21, 'Filtro de spam', TRUE, 4),
    (22, 'Somente banco de dados relacional', FALSE, 1),
    (22, 'Sistema operacional móvel', FALSE, 2),
    (22, 'IA Generativa', TRUE, 3),
    (22, 'Rede local sem fio', FALSE, 4),
    (23, 'Leitura de código de barras', FALSE, 1),
    (23, 'Reconhecimento facial', TRUE, 2),
    (23, 'NFC para pagamento apenas', FALSE, 3),
    (23, 'Acelerômetro para passos', FALSE, 4),
    (24, 'Não, sistemas de IA podem conter falhas e vieses nos dados', TRUE, 1),
    (24, 'Sim, são sempre perfeitas', FALSE, 2),
    (24, 'Sim, se conectadas à internet', FALSE, 3),
    (24, 'Não, porque não usam dados', FALSE, 4),
    (25, 'Níquel-cádmio em todos os modelos', FALSE, 1),
    (25, 'Pilhas alcalinas descartáveis', FALSE, 2),
    (25, 'Bateria de chumbo-ácido', FALSE, 3),
    (25, 'Íons de Lítio (Li-Ion)', TRUE, 4),
    (26, 'Sim, 100% sempre é a única prática recomendada', FALSE, 1),
    (26, 'A bateria deve ficar sempre em 0%', FALSE, 2),
    (26, 'Não, o ideal para a vida útil é manter a carga entre 20% e 80%', TRUE, 3),
    (26, 'Carregar apenas uma vez por mês', FALSE, 4),
    (27, 'Aumenta a potência do processador permanentemente', FALSE, 1),
    (27, 'Desativa conexões sem fio e ajuda a economizar energia da bateria', TRUE, 2),
    (27, 'Apaga todos os arquivos', FALSE, 3),
    (27, 'Melhora a cobertura de rede', FALSE, 4),
    (28, 'Tela AMOLED (ou OLED)', TRUE, 1),
    (28, 'Tela CRT', FALSE, 2),
    (28, 'Tela de papel comum', FALSE, 3),
    (28, 'Tela LCD sempre com retroiluminação desligada', FALSE, 4),
    (29, 'Somente computadores de mesa', FALSE, 1),
    (29, 'Apenas impressoras', FALSE, 2),
    (29, 'Somente televisores sem conexão', FALSE, 3),
    (29, 'Tablets, smartwatches e e-readers', TRUE, 4),
    (30, 'Elimina toda degradação da bateria', FALSE, 1),
    (30, 'Desativa a bateria', FALSE, 2),
    (30, 'Aumento da geração de calor durante o carregamento', TRUE, 3),
    (30, 'Dobra sempre a capacidade', FALSE, 4),
    (31, 'O brilho não tem qualquer efeito', FALSE, 1),
    (31, 'Brilho mais alto consome mais energia e reduz a duração da bateria', TRUE, 2),
    (31, 'Brilho alto desliga o processador', FALSE, 3),
    (31, 'Brilho baixo impede carregamento', FALSE, 4),
    (32, 'Otimizando o gerenciamento de energia e consumo dos aplicativos', TRUE, 1),
    (32, 'Impedindo qualquer uso de aplicativos', FALSE, 2),
    (32, 'Aumentando sempre o brilho', FALSE, 3),
    (32, 'Desativando permanentemente a bateria', FALSE, 4);

COMMIT;

-- RA01. Temas em ordem alfabética e quantidade de perguntas.
SELECT topico, COUNT(*) AS quantidade_perguntas
FROM perguntas
GROUP BY topico
ORDER BY topico;

-- RA02a. Uma pergunta aleatória de qualquer tema.
SELECT p.id_pergunta, p.topico, p.enunciado
FROM perguntas p
ORDER BY RANDOM()
LIMIT 1;

-- RA02b. Uma pergunta aleatória de um tema informado (exemplo abaixo).
-- Altere o texto de topico para consultar outro tema.
SELECT p.id_pergunta, p.topico, p.enunciado
FROM perguntas p
WHERE p.topico = 'Streaming, jogos online e gamification'
ORDER BY RANDOM()
LIMIT 1;

-- RA03. Enunciado e alternativas de uma pergunta (exemplo: id 1). Não exibe o gabarito.
SELECT p.id_pergunta, p.enunciado, CHR(64 + o.ordem) AS alternativa, o.texto_opcao
FROM perguntas p
JOIN opcoes o ON o.id_pergunta = p.id_pergunta
WHERE p.id_pergunta = 1
ORDER BY o.ordem;

-- RA04. Demonstração de alternativa correta e incorreta para uma pergunta.
-- A consulta retorna uma alternativa correta e uma incorreta, com o resultado de cada escolha.
WITH escolhidas AS (
    (SELECT id_pergunta, ordem, texto_opcao, is_correta
     FROM opcoes WHERE id_pergunta = 1 AND is_correta = TRUE LIMIT 1)
    UNION ALL
    (SELECT id_pergunta, ordem, texto_opcao, is_correta
     FROM opcoes WHERE id_pergunta = 1 AND is_correta = FALSE ORDER BY ordem LIMIT 1)
)
SELECT id_pergunta, CHR(64 + ordem) AS alternativa, texto_opcao,
       CASE WHEN is_correta THEN 'CORRETA' ELSE 'INCORRETA' END AS resultado
FROM escolhidas
ORDER BY is_correta DESC;

-- RA05. Explicação e tema da pergunta. O modelo atual não possui URL/fonte bibliográfica.
SELECT id_pergunta, topico, enunciado, explicacao
FROM perguntas
WHERE id_pergunta = 1;

-- RA06. Ranking de jogadores por melhor pontuação registrada; desempate pelo menor tempo.
WITH melhor AS (
    SELECT id_jogador, MAX(pontuacao_total) AS melhor_pontuacao
    FROM partidas GROUP BY id_jogador
), melhores_partidas AS (
    SELECT m.id_jogador, m.melhor_pontuacao, MIN(p.tempo_segundos) AS tempo_na_melhor_pontuacao
    FROM melhor m JOIN partidas p ON p.id_jogador = m.id_jogador AND p.pontuacao_total = m.melhor_pontuacao
    GROUP BY m.id_jogador, m.melhor_pontuacao
)
SELECT j.nome_usuario, m.melhor_pontuacao, m.tempo_na_melhor_pontuacao
FROM melhores_partidas m JOIN jogadores j ON j.id_jogador = m.id_jogador
ORDER BY m.melhor_pontuacao DESC, m.tempo_na_melhor_pontuacao ASC, j.nome_usuario;

-- RA07. Histórico de partidas de um jogador (altere nome_usuario).
SELECT j.nome_usuario, p.id_partida, p.pontuacao_total, p.pontos_bonus,
       p.tempo_segundos, p.ajudas_usadas, p.data_partida
FROM jogadores j
JOIN partidas p ON p.id_jogador = j.id_jogador
WHERE j.nome_usuario = 'nome_de_usuario'
ORDER BY p.data_partida DESC;
