

import React from 'react';


const Books = props => {
	return (
		<section id='books'>
			<div id='ruthie'>
				<img src='client/images/ruthie cover.jpg'/>
				<a href='http://www.albertwhitman.com/book/little-red-ruthie/'>Publisher</a>
				
				<p>
					Brave Ruthie has taken cleverness up a notch when compared to Riding Hood, her predecessor. A hungry wolf is no match for this smart little girl, who teaches him about the Hanukkah miracle, while serving him with platefuls of yummy latkes. Of course he’s way too stuffed to eat her!
				</p>
				
				<br/>
				
				<p className='review'><i>...the wolf tries on her clothes—not that this fools clever Ruthie, whose quick thinking and latke-making skills solve her wolf problem. The cartoony illustrations and lighthearted text incorporate Hanukkah details and motifs... <br/>--The Horn Book Nov/Dec, 2017</i></p>
				
				<br/>
				
				<p className='review'><i>Humorous illustrations invigorate the predictable plot, as does the lively language. VERDICT A welcome holiday offering for most collections.<br/>--School Library Journal Oct, 2017</i></p>
				
				<br/>
				
				<p className='review'><i>Koster and Eastland’s spoof takes several twists and turns...  Eastland’s digital drawings, breezy and punctuated with lots of red, are a stylish counterpoint to the poker-faced text. <br/>--Publishers Weekly Sep, 2017</i></p>
			</div>

			<div id='mitzi'>
				<img src='client/images/mitzi cover.jpg'/>
				<a href='http://www.karben.com/Mitzis-Mitzvah-Board-Book_p_646.html'>Publisher</a>
				
				<p>
					A visit to a Nursing Home during the Jewish New Year does not start out well for Mitzi, a little dog. While her family visits with elderly relatives, 
					Mitzi is tied up outside until a sympathetic nurse invites her in and everyone discovers that Mitzi is the perfect guest. 
					Her loving kindness brings holiday joy to everyone, young and old. This book is a <a href='http://pjlibrary.org/books/mitzis-mitzvah-koster/if205'>PJ Library Selection</a>.
				</p>
				
				<br/>

				<p className='review'><i>...the book will have widespread appeal in Jewish preschool settings and with families who have partici­pated in the type of mitzvah project with their own dogs.<br/>--Jewish Book World</i></p>
			</div>
			
			<div id='peanut'>
				<img src='client/images/peanut cover.jpg'/>
				<a href='http://www.albertwhitman.com/product/the-peanut-free-cafe-paperback/'>Publisher</a>
				
				<p>
					Simon is a picky eater, but peanut butter is one food he adores.  When a child with a peanut allergy arrives at school, it 
					is Simon who proposes big changes to the lunchroom.  Will he be able to overcome his own fussy ways to help a new friend? 
				</p>

				<br/>

				<p className='review'><i>
					The story addresses several important topics, all with a lighthearted touch...  An informative and colorful selection, 
					told in a nonthreatening way that kids will relate to. <br/>-–Debbie Stewart Hoskins, Grand Rapids Public Library, MI. 
				</i></p>
				
				<br/>
				
				<p className='review'><i>
					This story brings the situation home and provides some welcome information for those unfamiliar 
					with the malady. <br/>--Ilene Cooper, American Library Association.
				</i></p>
			</div>
		</section>
	);
}


export default Books;

