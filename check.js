// var data = [
//   {
//     id: 841,
//     signal_id: 9,
//     symbol: 'AXISBANK#',
//     type: 'LE',
//     order_type: 'Market',
//     price: 796.9,
//   },

//   {
//     id: 828,
//     signal_id: 7,
//     symbol: 'AXISBANK#',
//     type: 'LX',
//     order_type: 'Market',
//     price: 778.65,
//   },

//   {
//     id: 837,
//     signal_id: 8,
//     symbol: 'AXISBANK#',
//     type: 'SE',
//     order_type: 'Market',
//     price: 786.05,
//   },

//   {
//     id: 842,
//     signal_id: 7,
//     symbol: 'BANKNIFTY',
//     type: 'LE',
//     order_type: 'Market',
//     price: 417.9,
//   },

//   {
//     id: 845,
//     signal_id: 8,
//     symbol: 'BANKNIFTY',
//     type: 'LE',
//     order_type: 'Market',
//     price: 424,
//   },

//   {
//     id: 846,
//     signal_id: 8,
//     symbol: 'BANKNIFTY',
//     type: 'LX',
//     order_type: 'Market',
//     price: 422,
//   },

//   {
//     id: 844,
//     signal_id: 8,
//     symbol: 'BANKNIFTY',
//     type: 'LX',
//     order_type: 'Market',
//     price: 423,
//   },

//   {
//     id: 838,
//     signal_id: 6,
//     symbol: 'HCLTECH#',
//     type: 'SX',
//     order_type: 'Market',
//     price: 905.25,
//   },

//   {
//     id: 832,
//     signal_id: 7,
//     symbol: 'HINDALCO',
//     type: 'SE',
//     order_type: 'Market',
//     price: 416.8,
//   },

//   {
//     id: 836,
//     signal_id: 8,
//     symbol: 'HINDALCO',
//     type: 'SX',
//     order_type: 'Market',
//     price: 409.05,
//   },

//   {
//     id: 830,
//     signal_id: 5,
//     symbol: 'ITC#',
//     type: 'LE',
//     order_type: 'Market',
//     price: 331.9,
//   },

//   {
//     id: 840,
//     signal_id: 6,
//     symbol: 'ITC#',
//     type: 'LX',
//     order_type: 'Market',
//     price: 331.55,
//   },

//   {
//     id: 843,
//     signal_id: 7,
//     symbol: 'M&M',
//     type: 'LE',
//     order_type: 'Market',
//     price: 1276.95,
//   },

//   {
//     id: 834,
//     signal_id: 9,
//     symbol: 'NIFTY',
//     type: 'LE',
//     order_type: 'Market',
//     price: 176.4,
//   },
//   {
//     id: 831,
//     signal_id: 7,
//     symbol: 'NIFTY',
//     type: 'LE',
//     order_type: 'Market',
//     price: 162.7,
//   },

//   {
//     id: 833,
//     signal_id: 8,
//     symbol: 'NIFTY',
//     type: 'LX',
//     order_type: 'Market',
//     price: 203.7,
//   },

//   {
//     id: 835,
//     signal_id: 10,
//     symbol: 'NIFTY',
//     type: 'LX',
//     order_type: 'Market',
//     price: 191.05,
//   },

//   {
//     id: 829,
//     signal_id: 3,
//     symbol: 'TECHM#',
//     type: 'SX',
//     order_type: 'Market',
//     price: 1054.4,
//   },

//   {
//     id: 839,
//     signal_id: 4,
//     symbol: 'TECHM#',
//     type: 'SX',
//     order_type: 'Market',
//     price: 1045.95,
//   },
// ]

// // function onlyUnique(value, index, self) {
// //     return self.indexOf(value) === index;
// //   }

// //   // usage example:
// //   var a = ['LE','LE','LX','LX','LE','LE','LX','LX'];
// //   var unique = a.filter(onlyUnique);

// //   console.log(unique);

//   var myArray = ['LE','LE','LX','LX','LE','LE','LX','LX'];
// var unique = myArray.filter((v, i, a) => a.indexOf(v) === i);

// console.log(unique);

// // function uniqueArray3(a) {
// //     function onlyUnique(value, index, self) {
// //         return self.indexOf(value) === index;
// //     }

// //     // usage
// //     var unique = a.filter( onlyUnique ); // returns ['a', 1, 2, '1']

// //     return unique;
// //   }
// //   uniqueArray3(myArray)

// function onlyUnique(value, index, self) {
//   return self.indexOf(value) === index
// }
// //   // usage example:

// var a = ['LX', 'LX', 2, 1, 3, 'LX', 'LX', 'LX']
// var unique = a.filter(onlyUnique)
// console.log(unique)

// var myArray = ['a', 1, 'a', 2, 1];

// let unique = [...new Set(myArray)];

// console.log(unique);

// const unique = (value, index, self) => {
//     return self.indexOf(value) === index
// }

// var ages = ['LX','LX','LX','LX','LE','LE','LX','LX'];
// // const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30]
// const uniqueAges = ages.filter(unique)

// console.log(uniqueAges)

// var ages = ['LX','LX','LX','LX','LE','LE','LX','LX'];
// for(let i =0 ; i<ages.length; i++ ){
//     // console.log( ages[i]);

//      var a =ages[0]
//   return console.log(a);
// }
// const newt =ages.sort( function( a , b){
//     if(a < b) return -1;
//     if(a > b) return 1;
//     return 0;
// });
// console.log(newt);
// for(let i =0 ; i < ages.length;i++){

//   if(!(ages[i] == ages[i - 1])){
//   let avf = ages[i]
//   return avf
//   }
// }

// A JavaScript program to sort an array according
// to the order defined by another array

/* A Binary Search based function to find
	index of FIRST occurrence of x in arr[].
	If x is not present, then it returns -1 */
// function first(arr,low,high,x,n)

// {
// 	if (high >= low) {
// 		// (low + high)/2;
// 		let mid = low + Math.floor((high - low) / 2);

// 		if ((mid == 0 || x > arr[mid - 1]) && arr[mid] == x)
// 			return mid;
// 		if (x > arr[mid])
// 			return first(arr, (mid + 1), high,x, n);
// 		return first(arr, low, (mid - 1), x, n);
// 	}
// 	return -1;
// }

// // Sort A1[0..m-1] according to the order
// // defined by A2[0..n-1].
// function sortAccording(A1,A2,m,n)
// {
// 	// The temp array is used to store a copy
// 	// of A1[] and visited[] is used to mark the
// 	// visited elements in temp[].
// 	let temp=[];
// 	let visited=[];

// 	for (let i = 0; i < m; i++)
// 	{
// 		temp[i] = A1[i];
// 		visited[i] = 0;
// 	}

// 	// Sort elements in temp
// 	temp.sort(function(a, b){return a-b});

// 	// for index of output which is sorted A1[]
// 	let ind = 0;

// 	// Consider all elements of A2[], find them
// 	// in temp[] and copy to A1[] in order.
// 	for (let i = 0; i < n; i++)
// 	{
// 		// Find index of the first occurrence
// 		// of A2[i] in temp
// 		let f = first(temp, 0, m - 1, A2[i], m);
// 		// If not present, no need to proceed
// 		if (f == -1)
// 		{
// 			continue;
// 		}
// 		// Copy all occurrences of A2[i] to A1[]
// 		for (let j = f; (j < m && temp[j] == A2[i]);j++)
// 		{
// 			A1[ind++] = temp[j];
// 			visited[j] = 1;
// 		}
// 	}
// 	// Now copy all items of temp[] which are
// 	// not present in A2[]
// 	for (let i = 0; i < m; i++)
// 	{
// 		if (visited[i] == 0)
// 			A1[ind++] = temp[i];
// 	}

// }

// // Utility function to print an array
// function printArray(arr,n)
// {
// 	for (let i = 0; i < n; i++)
// 	{
// 		document.write(arr[i] + " ");

// 	}
// 	document.write("<br>");
// }

// // Driver program to test above function.
// let A1=[1,1,2,2,1,2,1,2,1,1,1,2,1,2,1 ];
// let A2=[2, 1, 8, 3 ];

// let m = A1.length;
// let n = A2.length;
// document.write("Sorted array is <br>");

// sortAccording(A1, A2, m, n);
// printArray(A1, m);

// This code is contributed by avanitrachhadiya2155
// for (let i = 0; i < arr.length; i++) {
//   let ans = arr[i]
//   // console.log(ans)

//   if (value == 'LX') {
// 	return value
//   }
// }

let arr = [
  { id: 1, ty: 'a', value: 'LE' },
  { id: 2, ty: 'a', value: 'LE' },
  { id: 3, ty: 'a', value: 'LX' },
  { id: 4, ty: 'a', value: 'LX' },
  { id: 5, ty: 'b', value: 'LX' },
  { id: 6, ty: 'b', value: 'LE' },
  { id: 7, ty: 'b', value: 'LE' },
  { id: 8, ty: 'b', value: 'LX' },
  { id: 9, ty: 'c', value: 'LE' },
  { id: 10, ty: 'c', value: 'LE' },
  { id: 11, ty: 'c', value: 'LX' },
]

// arr.map(a=>a.value)
	
	
	//   var unique = arr.map(a=>a.value).filter(
	// 	function onlyUnique(value, index, self) {
	// 		let newarr = []
	// 		let arr2 = []
	//     if( self.indexOf(value) === index ){
	// 		 newarr =[value]
	// 		console.log("newarr",newarr)	
			
	// 	}else{
	// 		 arr2 = [value]
	// 		console.log("arr2",arr2)             
	// 	}
	//   })
	//   console.log("unique",unique);

	// function sortFunc(a, b) {
	// 	var sortingArr = [ 'b', 'c', 'b', 'b', 'c', 'd' ];
	// 	return sortingArr.indexOf(a[1]) - sortingArr.indexOf(b[1]);
	//   }
	//   console.log(sortFunc());
	//   itemsArray.sort(sortFunc);
	
	// let arr = [
	// 	{ ty: a, value: 'LE' },
	// 	{ ty: a, value: 'LE' },
	// 	{ ty: a, value: 'LX' },
	// 	{ ty: a, value: 'LX' },
	// 	{ ty: b, value: 'LX' },
	// 	{ ty: b, value: 'LE' },
	// 	{ ty: b, value: 'LE' },
	// 	{ ty: b, value: 'LX' },
	// 	{ ty: c, value: 'LE' },
	// 	{ ty: c, value: 'LE' },
	// 	{ ty: c, value: 'LX' },
	//   ]
	  // condition  match two type like first of all cheack 'ty' and order asnding and second time
	  // match value is LE or LX and maintain it
	  
	   // OUTPUT 
	  // [ 
	  //     { ty: a, value: 'LE' },
	  //     { ty: a, value: 'LX' },
	  //     { ty: a, value: 'LE' },
	  //     { ty: a, value: 'LX' },
	  //     { ty: b, value: 'LX' },
	  //     { ty: b, value: 'LE' },
	  //     { ty: b, value: 'LX' },
	  //     { ty: b, value: 'LE' },
	  //     { ty: c, value: 'LE' },
	  //     { ty: c, value: 'LX' },
	  //     { ty: c, value: 'LE' },
	  //  ]
