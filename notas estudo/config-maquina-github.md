## SSH- Como configurar a máquina para o GitHub
 
1° verificar se há chave SSH com o comando:
```bash
ls -al ~/.ssh
```
2° abrir o git bash e criar nova chave com o comando:
```bash
ssh-keygen -t ed25519 -C "meu email do GitHub"
```
3° enter 4x
 
4° digitar
```bash
eval "$(ssh-agent -s)"
ssh-add ~/ .ssh/id (tab)
```
5° enter
 
6° copiar chave ssh com o comando:
```bash
clip < ~/.ssh/id(tab).(tab)
```
7° entre no GitHub -> configurações -> SSH => nova chave -> cole a chave
 
8° testar conexão com o comando:
```bash
ssh -T git@github.com