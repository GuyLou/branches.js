# Branches.js
## a simple framework for embedding different data inside an html

## Usage

Simply set a template inside an html node, where each parameter is set as follows: *{$parameter}*
whereas each node should be marked by a class.
Once loaded the framework instance may recognize the class and replace the parameters with any JSON based content and replace each parameter

the *{$parameter}* was chosen in order to simply import multi-line string templates from Php and simply migrate them to the frontend

The embedding JSON structure should match relevant parameters, where each JSON key should match the {$parameter} name (e.g "parameter"), and the value of the key, will hold the content to be replaced


## Syntax

### Constructor

creates a new branches instance
optional parameters:
* type - default branches. either leaves or branches:
    * leaves - for repetetive (by loop) html nodes to be inserted inside the same selected node
    * branches - for handling a single node, with the ability to update that node during a session
* masterNode - default - document. the node on which the instance will engage. can be any node, set by either #id, .class or tag
* masterClass - the class the desired to be engaged nodes will be makred in. default "branches"
* tmplt - the html text to be inserted. if empty, the innerHTML of masterNode is taken

### Methods

#### Branches
plantHTML(key,value)
update the relevant parameter held inside the node masterClass with the relevant value
key - the parameter
value - the value to be set

plantAttrib
update the relevant parameter held inside the **attribute** of the node's masterClass with the relevant value
key - the parameter
value - the value to be set


climbABranch(data)
updates a set of nodes, with the data received
data - JSON of keys and values to be updated where:
key - the parameter
value - the value to be set

#### Leaves
leavesLuv(leafId,itemsjson,append = 1)
fills the relevant node with one or more embedded data
* leafId - the class upon which the filing works
* itemsjson - the json to take the data from
* append - optional, default 1. if append is set to 1, the data will be added to the existing leaf. if set as 0 it will replace existing content

## Example
A running example can be found <a href="https://42knots.midrehov.com/42/apps/news.html?channel=56">here</a>
