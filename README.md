# Branches.js
## a simple framework for embedding different data inside an html

## Usage

Simply set a template inside an html node, where each parameter is set as follows: {$parameter}
whereas each node should be marked by a class.
Once loaded the framework instance may recognize the class and replace the parameters based on any user triggered event or other. loading of JSON data, for example

the {$parameter} was chosen in order to simply import multi-line string templates from Php and simply migrate them to the frontend

## Syntax

### Constructor

creates a new branches instance
optional parameters:
* type - default branches. either leaves or branches:
** leaves - for repetetive (by loop) html nodes to be inserted inside the same selected node
** branches - for handling a single node, with the ability to update that node during a session
* masterNode - default - document. the node on which the instance will engage. can be any node, set by either #id, .class or tag
* masterClass - the class the desired to be engaged nodes will be makred in. default "branches"
* tmplt - the html text to be inserted. if empty, the innerHTML of masterNode is taken

### Methods

#### Branches
plantHTML
plantAttrib
climbABranch

#### Leaves
leavesLuv - 

## Example
A running example can be found <a href="https://42knots.midrehov.com/42/apps/news.html?channel=56">here</a>
