## SSH- Como configurar a máquina para o GitHub
 
- verificar se a chave SSH com o comando:
```bash
ls -al ~/.ssh
```
- abrir o git bash e criar nova chave com o comando:
```bash
ssh-keygen -t ed25519 -C "meu email do GitHub"
```
- enter 4x
 
- digitar
```bash
eval "$(ssh-agent -s)"
ssh-add ~/ .ssh/id (tab)
```
- enter
 
- copiar chave ssh com o comando:
```bash
clip < ~/.ssh/id(tab).(tab)
```
- entre no GitHub -> configurações -> SSH => nova chave -> cole a chave
 
- testar conexão com o comando:
```bash
ssh -T git@github.com