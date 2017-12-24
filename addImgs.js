'use strict';

function render(object = {}){
	let el = document.querySelector('.content>.container');

	let row = document.createElement('div');
	row.classList.add('row');

	for(let key in object){
		let div = document.createElement('div');

		div.className = "card-row clearfix";

		for(let i=0;i<object[key].length;i++){
			let divInner = document.createElement('div');

			divInner.className = "col-md-3 col-sm-6";
			divInner.innerHTML = `
								<div class = "card">
									<h4>${object[key][i][0]}</h4>
									<a href = ${object[key][i][1]}><img src = ${object[key][i][2]}></a>
								</div>
								`;
			div.append(divInner);	
		}
		row.append(div);
	}

	el.append(row);
}

render({

		cardRow_1:[
					['Agriculture fields','\"photos/full/gallery1_full.jpg"','\"photos/preview/gallery1_prev.jpg"'],
					['Cavo Greko','\"photos/full/gallery2_full.jpg"','\"photos/preview/gallery2_prev.jpg"'],
					['Local fruits','\"photos/full/gallery3_full.jpg"','\"photos/preview/gallery3_prev.jpg"'],
					['Near Grecian Park Hotel','\"photos/full/gallery4_full.jpg"','\"photos/preview/gallery4_prev.jpg"']
				],
		cardRow_2:[
					['Near Troodos','\"photos/full/gallery5_full.jpg"','\"photos/preview/gallery5_prev.jpg"'],
					['Near Vrissaki Beach Hotel','\"photos/full/gallery6_full.jpg"','\"photos/preview/gallery6_prev.jpg"'],
					['Protaras beach','\"photos/full/gallery7_full.jpg"','\"photos/preview/gallery7_prev.jpg"'],
					['Protaras Pier','\"photos/full/gallery8_full.jpg"','\"photos/preview/gallery8_prev.jpg"']
				],
		cardRow_3:[
					['Near Church of Profitis Ilias','\"photos/full/gallery9_full.jpg"','\"photos/preview/gallery9_prev.jpg"'],
					['Near Church of Profitis Ilias','\"photos/full/gallery10_full.jpg"','\"photos/preview/gallery10_prev.jpg"'],
					['Near Church of Profitis Ilias','\"photos/full/gallery11_full.jpg"','\"photos/preview/gallery11_prev.jpg"'],
					['Near Church of Profitis Ilias','\"photos/full/gallery12_full.jpg"','\"photos/preview/gallery12_prev.jpg"']
				],
		cardRow_4:[
					['Troodos','\"photos/full/gallery13_full.jpg"','\"photos/preview/gallery13_prev.jpg"'],
					['Troodos','\"photos/full/gallery14_full.jpg"','\"photos/preview/gallery14_prev.jpg"'],
					['Troodos','\"photos/full/gallery15_full.jpg"','\"photos/preview/gallery15_prev.jpg"'],
					['Troodos','\"photos/full/gallery16_full.jpg"','\"photos/preview/gallery16_prev.jpg"']
				],
		cardRow_5:[
					['Troodos','\"photos/full/gallery17_full.jpg"','\"photos/preview/gallery17_prev.jpg"'],
					['Troodos','\"photos/full/gallery18_full.jpg"','\"photos/preview/gallery18_prev.jpg"'],
					['Troodos','\"photos/full/gallery19_full.jpg"','\"photos/preview/gallery19_prev.jpg"'],
					['Protaras Pier view','\"photos/full/gallery20_full.jpg"','\"photos/preview/gallery20_prev.jpg"']
				]
		});
