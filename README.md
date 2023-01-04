#Tasks
[done]plan
[done]webpack
[on-going]module/functions, see draw.io file
    [done] from tags, make a list
    [done] from an array, make a div list
    [ ] from an array, make a subset of an object array
[]dom
[]assemble
[]css

#Outputs

*All list
*Todo group showing list of not done
*Todo line showing text and tickbox
*Default group

#Inputs

*Group/tag name
*Task name
*Due date

#Steps

*Given a tagName, create a div with an autoId, this div will hold tasks later
**autoId to be generated by an idCounter
**A tagName can be non-unique, and but cannot be blank

*Given a taskName, tagName, dueDate, create div with a tickBox
**taskName can be non-unique, and but cannot be blank
**tagName to be selected from a radioButton of existingTagNames array
**dueDate can be selected from a calendar functionality
**tickBox has an isDone (y/n), when y, is normal, when n, is strikethrough and is appended to bottom (doneDiv), and vice-versa to (notDoneDiv)
*Given all taskClasses, append them all to a masterList

