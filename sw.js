PS C:\Users\tshep> Tshepo - Personal
Tshepo : The term 'Tshepo' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a 
path was included, verify that the path is correct and try again.
At line:1 char:1
+ Tshepo - Personal
+ ~~~~~~
    + CategoryInfo          : ObjectNotFound: (Tshepo:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
 
PS C:\Users\tshep> git clone https://github.com/napo446/GameBridge.git
Cloning into 'GameBridge'...
remote: Enumerating objects: 488, done.
remote: Counting objects: 100% (46/46), done.
remote: Compressing objects: 100% (46/46), done.
error: RPC failed; curl 56 Recv failure: Connection was reset
error: 6787 bytes of body are still expected
fetch-pack: unexpected disconnect while reading sideband packet
fatal: early EOF
fatal: fetch-pack: invalid index-pack output
PS C:\Users\tshep> git clone https://github.com/napo446/GameBridge.git
Cloning into 'GameBridge'...
remote: Enumerating objects: 488, done.
remote: Counting objects: 100% (46/46), done.
remote: Compressing objects: 100% (46/46), done.
remote: Total 488 (delta 21), reused 0 (delta 0), pack-reused 442 (from 1)
Receiving objects: 100% (488/488), 1.47 MiB | 362.00 KiB/s, done.
Resolving deltas: 100% (256/256), done.
PS C:\Users\tshep> firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\tshep

Before we get started, keep in mind:

  * You are initializing your home directory as a Firebase project directory

✔ Are you ready to proceed? No

Error: Aborted by user.

Having trouble? Try firebase [command] --help
PS C:\Users\tshep> cd C:\Users\tshep\GameBridge
PS C:\Users\tshep\GameBridge> firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  C:\Users\tshep\GameBridge

✔ Are you ready to proceed? Yes
✔ Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Set up        
deployments for static web apps

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.


Error: Failed to get Firebase project eduproassistprj. Please make sure the project exists and your account has permission to access it.

Having trouble? Try again or contact support with contents of firebase-debug.log
PS C:\Users\tshep\GameBridge> firebase use -add 
error: unknown option '-add'
PS C:\Users\tshep\GameBridge> 
