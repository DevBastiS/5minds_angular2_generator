# 5minds_angular_generator

This angular generator automatically generates modules for your angular2 or angular4 project.

# Installation 
Follow these instructions to install the generator:

Open your terminal and install yeoman (a tool to create a generator). 
```sh
$ npm install yo –g
```

For more information about yeoman go to http://yeoman.io/.

After the installation of yeoman you receive the following...
```sh
Yeoman Doctor

Running sanity checks on your system
✔ Global configuration file is valid
✔ NODE_PATH matches the npm root
✔ Node.js version
✔ No .bowerrc file in home directory
✔ No .yo-rc.json file in home directory
✔ npm version 

Everything looks all right!
```
Now clone the project with: 
```sh
$ git clone git@github.com:Vyperus/5minds_angular2_generator.git
```
Change to the generator folder in your terminal, now type:

```sh
$ npm link
```
First, npm link in a package folder will create a symlink in the global folder{prefix}/lib/node_modules/<package> that links to the package where the npm link command was executed. It will also link any bins in the package to {prefix}/bin/{name}. Next, in some other location, npm link package-name will create a symbolic link from globally-installed package-name to node_modules/ of the current folder.

For more information got to: https://docs.npmjs.com/cli/link

Get the name of the generator type: 
```sh
$ yo –-help
```

It will look like this: 

```sh
Usage: yo GENERATOR [args] [options]

General options:
  --help         # Print this info and generator's options and usage
  -f, --force    # Overwrite files that already exist
  --version      # Print version
  --no-color     # Disable colors
  --[no-]insight # Toggle anonymous tracking
  --generators	 # Print available generators

Install a generator:

  Generators can be installed through npm.

  $ npm install generator-angular
  $ yo angular --help

Completion:

  To enable shell completion for the yo command, try running

  $ yo completion

Troubleshooting:

  For any issues, try running

  $ yo doctor

Full Documentation: http://yeoman.io

Available Generators:

  5minds-angular2
```

In this example, the name you have to copy is „5minds-angular2”.
Now tell yeoman that you want to create a new module:
```sh
$ yo 5minds-angular2 module
```
Now you should see the instruction: 

**? Type Modulname in Pascalcase** 

Type in the Name for your module (e.g. "test").

**? Generate Service & Repo Layer? [y/n]** 

Answering with yes will generate a Service & Repo Layer.

**? Generate Routing? [y/n]** 

Answering with yes will generate a Routing.


The generator will create the following 
folders and files for you:

```sh
--test.component.ts
--test.component.html
--test.component.css
--test.module.ts
--test-routing.module.ts
--index.ts
--services
----index.ts
----test.service.default.ts
----test.service.interface.ts
--repositories
----test.repository.mock.ts
----test.repository.interface.ts
----index.ts
```
<<<<<<< HEAD
=======



>>>>>>> release/1.1.0
