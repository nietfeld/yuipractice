
	// Create a YUI sandbox on your page.
	YUI().use('node', 'event','selector-css3', function (Y) {
	    // The Node and Event modules are loaded and ready to use.
	    // Your code goes here!
	    
	    var bodyNode = Y.one(document.body);
	   	
	    // getting the main element
	    var strategies = Y.one('#strategies');
	    strategies.append('<p>Inner Genius Prep is a one-stop shop for SAT and ACT preparation, college application consulting and college essay coaching. Our goal is to make the high school and college application experience less stressful and more successful for students and families. All of our programs are based in the philosophy that each student has an “Inner Genius” within him waiting to be brought out, and our rates of test-score increases and college acceptances attest to the success of this approach. Inner Genius offers personalized, exclusively one-on-one tutoring and consulting, so your child is always treated as an individual and given undivided attention to help him best meet his goals. Our services include:</p>');

	    var subjects = Y.one('#subjects');
	    subjects.append('<p>Lisa’s outstanding work with my daughter helped her conquer test-taking anxiety and tap into her potential, dramatically increasing her score on the SAT. She guided my daughter through the college-essay writing and application process with great care and personalized attention and supported my daughter in achieving her goals. Working with Lisa helped make junior year, SATs and college applications much less stressful. I wholeheartedly recommend Inner Genius Prep to other parents seeking to help their children succeed.</p>');

	    // creating a new node
	    var item = Y.Node.create('<div id="header"><em>EMI</em></div');
	    bodyNode.append("<p>Wow what an awesome Friday!</p>");
	});