Simple Example Javascript Scripts

by Stephen Wilson, Professor, Conceptual Design, SFSU

These are example scripts with short explanations drawn from the unpublished book "Quick and Easy Guide to Javascript" by Stephen Wilson
Generate Alert Box if user tries to change text in text input field

<FORM>
<INPUT TYPE="text" VALUE= "dont change" NAME = "leavebutton"
onChange= "alert('Please dont change this')">
</FORM>
Show the date and time when the page loads

In this example the event handler onLoad is embedded within the tag. OnLoad activates whenever a new page has finished downloading. This alert code tells the browser to create an alert box containing the value of the variable "today". Thus, it automatically prints out the date and time when the page has finished loading and requires no special action by the user.
<SCRIPT LANGUAGE = "Javascript">
var today= new Date()
</SCRIPT>
....
<BODY onload=alert(today)>
Animate the background color of a document

Notice that the script is not just a series of document.bgColor = commands. You could write that script but the colors would change so quickly that you would not see the animated effect. We need to introduce a delay between each background color change. Javascript offers a setTimeout() method that allows creation of delays as well as serving other functions.
The setTimeout() method requires two elements to be enclosed in its parentheses. The first element is an expression to be evaluated or acted upon. The second element is the number of milliseconds (thousandths of a second) to be waited before the first action is undertaken.

setTimeout(expression to be evaluated, milliseconds)

<SCRIPT LANGUAGE= "javascript">

setTimeout("document.bgColor='white'", 1000)
setTimeout("document.bgColor='lightpink'", 1500)
setTimeout("document.bgColor = 'pink'", 2000)
setTimeout("document.bgColor =  'deeppink'", 2500)
setTimeout("document.bgColor = 'red'", 3000)
setTimeout("document.bgColor = 'tomato'", 3500)
setTimeout("document.bgColor = 'darkred'", 4000)
</SCRIPT>
User assignment of a property and dynamic generation of a Web page

In the example, which illustrates user assigned properties, a new property is defined for the document object called firstline. Anytime Javascript encounters the expression document.firstline it will produce the assigned text. The fact that I named it "firstline" carries no special meaning to Javascript; that is, it does not know that it is to be the first line in the document. Generally, it is a good idea to name the properties with a name related to your intended use.

The rest of the example shows how the write() method can be used to generate text that appears on a web page. Document.open() prepares for creating a page. The second open() forces it to appear.

<HTML>

<HEAD>
<SCRIPT LANGUAGE = "Javascript">
document.firstline = "Welcome to this page"
</SCRIPT>
<TITLE>load demo</TITLE>
</HEAD>

<BODY>
<SCRIPT>
document.open()
document.write(document.firstline)
document.open()
</SCRIPT>

</BODY>
Sample Script to Animate Text in Text Field

This script will set up a form that asks for user input. It will animate text in boxes that surround it to urge the user to provide the information. To accomplish this, we must first use standard HTML form tags to create the input fields for user typing. We must also create text fields that we will use to create the animation.
For the sake of illustrating methods of using Javascript to refer to different forms that appear on a page, the examples presents the information in 3 forms. It could have also been combined into one form. It places the fields for user input in the middle form called f2 and the fields that will animated text placed into them into fields f1 on top and f3 on the bottom. Also it places the input elements in form f1 and f3 into tables in order to gain more control over their placement. f1,f2, and f3 are just arbitrary names given to the fields. In this example "Answer Soon" text appears and disappears, moving around the fields from left to right on the top and then from left to right on the bottom.

All the code to establish fields and tables should be famiilar to readers with HTML experience. The new part is the code enclosed in the SCRIPT tags. The heart of these commands are expressions that assign values to particular fields. For example the code line document.f1.ta1.value = 'Answer Soon' tells the browser to find the document object (the Web page) and then the form that is a subelement of it called f1 (the first one on top) and then the subelement of that form called ta.1 (the first text entry field). Once that element is targeted, the script tells the browser to change the value property of that text field by assigning it the text "Answer Soon". The Value attribute in standard HTML markup is the text that a field contains (usually because a user has typed it there.). Javascript has extended this allow the script to type values. To the user the text appears as in an animation. After text appears the sample script makes it disappear by assinging the blank value "" to the same text field.

<HTML>
<HEAD>
<TITLE> Animated Text</TITLE>
</HEAD>
<BODY >

<FORM NAME="f1">
<TABLE>
<TR> <TD> <INPUT NAME="ta1" TYPE="text" SIZE="20"> 
<TD> <INPUT NAME="ta2" TYPE="text" SIZE="20"> 
<TD> <INPUT NAME="ta3" TYPE="text" SIZE="20">
</TABLE></FORM>

<HR>

<FORM NAME="f2" ACTION="http://netadd.com/nam.cgi" METHOD="POST">
<CENTER>
Name <INPUT NAME="pername" TYPE="text" SIZE="20"> Name<P>
Age <INPUT NAME="perage" TYPE="text" SIZE="5"> Age<P>
Occupation <INPUT NAME="perocc" TYPE="text" SIZE="20">Occupation <P>
<INPUT TYPE="Submit" VALUE="Submit">
<INPUT TYPE="Reset" VALUE="Reset">
</CENTER>
</FORM>

<HR>
<FORM NAME="f3">
<TABLE>
<TR> <TD> <INPUT NAME="ta4" TYPE="text" SIZE="20"> 
<TD> <INPUT NAME="ta5" TYPE="text" SIZE="20"> 
<TD> <INPUT NAME="ta6" TYPE="text" SIZE="20">
</TABLE></FORM>

<SCRIPT LANGUAGE= "javascript">
setTimeout("document.f1.ta1.value = 'Answer Soon'", 1000)
setTimeout("document.f1.ta1.value = ''", 1300)
setTimeout("document.f1.ta2.value = 'Answer Soon'", 1600)
setTimeout("document.f1.ta2.value = ''", 1900)
setTimeout("document.f1.ta3.value = 'Answer Soon'", 2200)
setTimeout("document.f1.ta3.value = ''", 2500)
setTimeout("document.f3.ta4.value = 'Answer Soon'", 2800)
setTimeout("document.f3.ta4.value = ''", 3100)
setTimeout("document.f3.ta5.value = 'Answer Soon'", 3400)
setTimeout("document.f3.ta5.value = ''", 3700)
setTimeout("document.f3.ta6.value = 'Answer Soon'", 4000)
setTimeout("document.f3.ta6.value = ''", 4300)
</SCRIPT> 
Sample Script to Customize Links Based on User Button Choices

This sample script demonstrates how to create a script that lets a user chose a category of infomation after which it dynamically generates an html page containing links relevant to that interest. It uses a simple form with radio buttons to determine interest. Just to add interest it also asks the users to type their name. Once the users are done chosing, they click on the submit button and the script generates the html document using their name. For the sake of clarity this example is very short with only one choice requested. The same principles, however, could be applied to more sophisticated sets ofchoices.
There are three major parts to this Web page and script: A. Javascript script cotaining the database of links for each kind of music, the function to create a unique page based on their choice, and the function to create a new Netscape window to show the page. B. HTML code to create the informationrequest page cotaining an input form. C. Javascript code to set up default values.

<HTML>
<HEAD><TITLE>Choice</TITLE>

<SCRIPT Language="javascript">

// sets up database of links - SECTION A1
muresources=""
muresources["classical"]= "<A HREF='http://net.com/classical.file1'>Meditative classical music<A><P>
 <A HREF='http://net.com/classical.file2'>Provoking classical music<A>"
muresources["rock"] = "<A HREF='http://net.com/rock.file1'>Popular rock music<A><P>
 <A HREF='http://net.com/rock.file2'>Exciting rock music<A>"
muresources["ethnic"] = "<A HREF='http://net.com/mexican.file1'>Mexican music<A><P>
 <A HREF='http://net.com/Indian.file2'>Indian music<A>"

function getLink() {
// constructs unique page using name and choice of music - SECTION A.2
temp = muresources[choice]
temp2 = "<TITLE>Custom Links</TITLE><H3>" +document.m.pername.value+", here are some
links for you</H3><P>"+temp
}

function writeIt(){
// creates new window to display page - SECTION A.3
diswin = window.open();
diswin.document.open();
diswin.document.write(temp2);
diswin.document.close()
}

function doAll(){
// master routine calls other functions - SECTION A.4
getLink();
writeIt()
}
</SCRIPT>

</HEAD>
<BODY >

<!-- Sets up basic input form SECTION B -->
<H3> Choose the kind of music you prefer<BR>
and this page will fetch links of interest to you</H3>

<HR>

<FORM NAME="m" >
Choose a kind of music<P>
<INPUT TYPE="radio" NAME="mus" VALUE="classical" OnClick="choice='classical'"
>Classical <BR>
<INPUT TYPE="radio" NAME="mus" VALUE="rock" OnClick="choice='rock'">Rock<BR>
<INPUT TYPE="radio" NAME="mus" VALUE="ethnic"
OnClick="choice='ethnic'">Ethnic<BR>
<HR>
Please type your name<P>
<INPUT TYPE="text" NAME="pername" SIZE=25>
<HR>
<INPUT TYPE="button" NAME="sub" VALUE="Show me links" OnClick=doAll()>
<INPUT TYPE="reset" NAME="res" >
</FORM>

<SCRIPT>
// sets defaults - SECTION C
choice = "classical"
document.m.mus[0].checked = true
document.m.mus[1].checked = false
document.m.mus[2].checked = false
</SCRIPT>
</BODY>
</HTML>
Using string properties to set characteristics of text on a page

Several properties control the appearance of text on the page. Note, however, that they cannot control the appearance of text after the page is rendered. The document must be rewritten for the new characteristics to become visible. This example generates a series of lines, each with a different style,color, or size of text.
<SCRIPT>
//assigns value to variable
test ="What is all this?"

// opens document and uses methods to modify text characteristics
document.open()
document.write(test.bold()+"<P>")
document.write(test.fontsize(7)+"<P>")
document.write(test.fontcolor("red")+"<P>")
document.write(test.toUpperCase()+"<P>")

//assigns multiple characteristics to text
document.write(test.italics().fontsize(6).fontcolor("green")+"<P>")
document.open()
</SCRIPT>
Using Substrings to Generate Scrolling Banners

This example uses the subString method to create a scrolling banner in a text field and on the status line of the window. Scrolling text seems to slide from left to right. You can create this effect by systematically displaying a changing section of some target text. For example, if you display character 0 to 24 of some text and next display 1 to 25 and next 2 to 26, the text will appear to be moving from right to left. The sample illustrates a method for accomplishing this effect.
<HTML>
<HEAD><TITLE> Banner</TITLE>

<SCRIPT LANGUAGE= "javascript">
// Puts the text to scroll into variable called sent - SECTION A
// uses length propert to assess its length and put into variable slen
// initalizes a,b,n, and subsent variables
var sent = "This is a demonstration of a banner moving from the left to right. It makes use of the substring property of Javascript to make an interesting display"
var slen = sent.length
var siz = 25
var a = -3, b = 0
var subsent = "x"

// Creates a function to capture substrings of sent - SECTION B
function makeSub(a,b) {
subsent = sent.substring(a,b) ;
return subsent;
}

//Creates a function that increments the indexes of the substring - SECTION C 
//each time and calls the makeSub() function to geneate strings
//a indicates start of substring and siz indicates size of string required
function newMake() {
a = a + 3;
b = a + siz
makeSub(a,b);
return subsent
}

//function uses loop to get changing substrings of target - SECTION D
//repeatedly calls newMake to get next substring
//uses setTimeout() command to arrange for substrings to display 
// at specified times
function doIt() {
for (var i = 1; i <= slen ; i++) {
setTimeout("document.z.textdisplay.value = newMake()", i*300);
setTimeout("window.status = newMake()", i*300);
}
}

</SCRIPT> 
</HEAD>

<BODY >
<HR> <CENTER>
<FORM NAME="z">
<INPUT NAME="textdisplay" TYPE="text" SIZE=25> <P>
<INPUT NAME="doit" Type="button" value = "Run Banner" onClick = "doIt()"> 
</FORM></CENTER>

<HR>

</BODY></HTML>
- This page created by Stephen Wilson, Professor Conceptual Design, SFSU (http://userwww.sfsu.edu/~swilson) swilson@sfsu.edu 
- More information about the Conceptual Design program is available at (http://userwww.sfsu.edu/~infoarts)
- It is a resource used in Art511 Art&Telecommunications course (http://userwww.sfsu.edu/~infoarts/Tele/Tele95.index.html)
- A comprehensive guide to Web design is available in the book World Wide Web Design Guide (Hayden Books) by Stephen Wilson
- The url of this page is (http://userwww.sfsu.edu/~infoarts/Tele/wilson.javascript.examples.html)