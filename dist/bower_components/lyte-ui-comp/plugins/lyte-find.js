;( function(){
	if( lyteDomObj ){

		function switchfn( text, value, method ){
			var flag
			switch( method ){
				case 'startswith' : {
					flag = text.indexOf( value ) == 0;
					break;
				}
				case 'endswith' : {
					var idx = text.indexOf( value );
					if( idx != -1 ){
						flag = idx + value.length == text.length;
					}
					break;
				}
				default : {
					flag = text.indexOf( value ) != -1;
				}
			}
			return flag;
		}

		function treecheck( visible, hidden, scope, value, data ){
			var rgx1 = new RegExp( '(' + ( value || '' ).replace( /(\\|\'|\"|\?|\^|\$|\.|\||\*|\+|\(|\)|\[|\]|\{|\})/g,  '\\$1' ) + ')', 'ig' ),
			rgx2 = /(?!>)([^><]+)(?=<)/ig;
			for( var i = 0; i < visible.length; i++ ){
				var vis = $L( visible[ i ] ).closest( 'lyte-tree' )[ 0 ];
				for( var j = 0; j < hidden.length; j++ ){
					var hid = $L( hidden[ j ] ).closest( 'lyte-tree' )[ 0 ];
					if( vis == hid || hid.contains( vis ) ){
						data.highlight && hide( hidden[ j ] )
						Lyte.arrayUtils( hidden, 'removeAt', j );
						j--;
					}
				}
			}
			for( var i = 0; i < visible.length; i++ ){
			   data.highlight && highlightnode( visible[ i ], value, data, rgx1, rgx2 );
			   value.length && scope.ltProp( 'stateAttr', $L( visible[ i ] ).closest( 'lyte-tree' ).attr( 'temp-var' ) )
			}
			for( var i = 0; i < hidden.length; i++ ){
				hide( hidden[ i ] )
				if( value.length ){
					var inn = $L( 'lyte-yield:not(.noChildClass) lyte-tree-icon', $L( hidden[ i ]  ).closest( 'lyte-tree' ).parent() ).eq( 0 );
					inn.hasClass( 'lyteIconOpened' ) && inn.click();
				}
			}
			if( !value.length ) {
				closealltree.call( this, scope )
			}
		}

		function closealltree( scope ){
			var icons = $L( 'lyte-yield:not(.noChildClass) lyte-tree-icon', scope );
			for( var i = icons.length - 1; i >= 0; i-- ){
				var cur = icons.eq( i );
				cur.hasClass( 'lyteIconOpened' ) && cur.click();
			}
		}

		function template( txt ){
			txt = txt || '';
	        txt = txt.trim();
	        var firstInd = txt.indexOf( '<template' ), secInd =  txt.indexOf( '</template>' ), idx = [];
	        idx.push( firstInd );
	          while( firstInd != -1 ) {
	              firstInd = txt.split( "<template", idx.length + 1 ).join( '<template' ).length;
	              if( firstInd > secInd ) {
	                txt = txt.slice( 0, idx.pop() ) + txt.slice( secInd + 11, txt.length );
	                firstInd = txt.indexOf( '<template' );
	                secInd =  txt.indexOf( '</template>' );
	              } else {
	                idx.push( firstInd )
	              }
	          }
	        return txt;
		}

		function highlightnode( element, value, data, rgx1, rgx2 ){
			element.classList.add( 'lyteSearchHidden' )
			var exspan = element._findelement;
			if( !exspan ){
				exspan = document.createElement( element.tagName );
				exspan.classList.add( 'lyteHighlightdiv' );
				_lyteUiUtils.insertAfter( element, exspan );
				element._findelement = exspan;
				exspan._originalelement = element;
			}
			exspan.style.display = "";
			if( element.children.length ){
				exspan.innerHTML = template( element.innerHTML ).replace( rgx2.test( template( element.innerHTML ) ) ? rgx2 : /.+/ig, function( arg ){
					return arg.replace( rgx1, '<span class = \"lyteFindHighlight '+ ( data.highlightclass || '' ) +'\">$1</span>' )
				})
			} else{
				exspan.innerHTML = element.textContent.replace( rgx1, '<span class = \"lyteFindHighlight '+ ( data.highlightclass || '' ) +'\">$1</span>' )
			}
		}

		function hide( elem ){
			$L( elem ).removeClass( 'lyteSearchHidden' );
			$L( elem._findelement ).css( 'display', 'none' );
		}

		function acccheck( visible, hidden, scope, value, data ){
			var rgx1 = new RegExp( '(' + ( value || '' ).replace( /(\\|\'|\"|\?|\^|\$|\.|\||\*|\+|\(|\)|\[|\]|\{|\})/g,  '\\$1' ) + ')', 'ig' ),
			rgx2 = /(?!>)([^><]+)(?=<)/ig, exs = scope.ltProp( 'exclusive' );

			for( var i = 0; i < visible.length; i++ ){
				for( var j = 0; j < hidden.length; j++ ){
					if( $L( hidden[ j ] ).closest( 'lyte-accordion-item' ).is( $L( visible[ i ] ).closest( 'lyte-accordion-item' ) ) ){
						data.highlight && hide( hidden[ j ] );
						Lyte.arrayUtils( hidden, 'removeAt', j );
						j--; continue;
					}
				}
				if( visible[ i + 1 ] ){
					if( $L( visible[ i ] ).closest( 'lyte-accordion-item' ).is( $L( visible[ i + 1 ] ).closest( 'lyte-accordion-item' ) ) ){
						value.length && data.highlight && highlightnode( visible[ i + 1 ], value, data, rgx1, rgx2 );
					}
				}
				value.length && data.highlight && highlightnode( visible[ i ], value, data, rgx1, rgx2 )
			}

			for( var i = 0; i < visible.length; i++ ){
				!value.length && hide( visible[ i ] );
				var close = $L( visible[ i ] ).closest( 'lyte-accordion-item ', scope )
				if( !close.hasClass( 'lyteAccordionActive' ) ){
					if( exs && i != visible.length - 1 ){
						continue;
					}
					value && close.click()
				} else if( !value ){
					close.click();
				}
			}

			for( var i = 0; i < hidden.length; i++ ){
				data.highlight && hide( hidden[ i ] );
				$L( hidden[ i ] ).closest( 'lyte-accordion-item.lyteAccordionActive' , scope ).click()
			}
			
		}

		function commonCheck( visible, hidden, scope, value, data ){
			var rgx1 = new RegExp( '(' + ( value || '' ).replace( /(\\|\'|\"|\?|\^|\$|\.|\||\*|\+|\(|\)|\[|\]|\{|\})/g,  '\\$1' ) + ')', 'ig' ),
			rgx2 = /(?!>)([^><]+)(?=<)/ig;

			if( value.length ){
				for( var i = 0; i < visible.length; i++ ){
			    	data.highlight && highlightnode( visible[ i ], value, data, rgx1, rgx2 );
				}
			}

			for( var i = 0; i < hidden.length; i++ ) {
				data.highlight && hide( hidden[ i ] );
			}

			if( !value.length ){
				for( var i = 0; i < visible.length; i++ ){
			    	data.highlight && hide( visible[ i ] );
				}
			}

		}

		function processing( evt ){
			var data = this._finddata,
			scope = $L( data.scope )[ 0 ],
			comp = data.component,
			search = $L( data.search || data.target, scope ),
			method = data.method,
			value = ( this.tagName != "LYTE-INPUT" ? this.value : this.querySelector( 'input,textarea' ).value ).toLowerCase(), text = [], visible = [], hidden = [];
			if( data.trim ){
				value = value.trim();
			}
			for( var i = 0; i < search.length; i++ ){
				if( search.eq( i ).hasClass( 'lyteHighlightdiv' ) ){
					continue;
				}
				if( switchfn( search[ i ].textContent.trim().toLowerCase(), value, method ) ){
					visible.push( search[ i ] )
				} else {
					hidden.push( search[ i ] )
				}	
			}
			if( data.onSearch && data.onSearch.call( this, visible, hidden, evt, value, this ) == false ){
				return;
			}
			( comp == 'tree' && treecheck.call( this, visible, hidden, scope, value, data ) ) || ( comp == "accordion" && acccheck.call( this, visible, hidden, scope, value, data ) ) || ( comp == undefined && commonCheck.call( this, visible, hidden, scope, value, data ) );
		}

		function eventFunc( evt ){
			clearTimeout( this._timeout );
			this._timeout = setTimeout( processing.bind( this, evt ), 250 );
		}

		function setValue( value ){
			if( this.tagName != "LYTE-INPUT" ){
				this.value = value;
			} else{
				this.ltProp( 'value', value );
			}
			eventFunc.call( this, {} ); 
		}

		lyteDomObj.prototype.lytefind = function( data ){
			data = data || {};
			data.highlight = data.highlight != undefined ? data.highlight : true;
			var current = this.get( 0 );
			if( current._finddata ){
				this.eq( 0 ).removefind();
			}
			current._finddata = data;
			current.setValue = setValue.bind( current );
			// current.resetValue = setValue.bind( current );
			current.addEventListener( 'input', eventFunc );
			return this;
		}

		lyteDomObj.prototype.removefind = function(){
			for( var i = 0; i < this.length; i++ ){
				var cur = this[ i ];
				if( cur._finddata ){
					var spans = $L( '.lyteHighlightdiv', cur._finddata.scope );
					for( var j = 0; j < spans.length; j++ ){
						// $L( spans[ j ] ).parent().children( '.lyteSearchHidden' ).removeClass( 'lyteSearchHidden' );
						if( spans[ j ]._originalelement ){
							$L( spans[ j ]._originalelement ).removeClass( 'lyteSearchHidden' );
							delete spans[ j ]._originalelement._findelement;
							delete spans[ j ]._originalelement;
						}
						spans[ j ].remove();
					} 
					clearTimeout( cur._timeout );
					cur.removeEventListener( 'input', eventFunc );
					delete cur._finddata; delete cur._timeout; delete cur.setValue; 
					// delete cur.resetValue;
				}
			}
			return this;
		}
	}
})();