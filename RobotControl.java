import javax.swing.*;

class RobotControl
{
   private Robot r;
   
   
   public RobotControl(Robot r)
   {
       this.r = r;
   }


   public void control(int barHeights[], int blockHeights[])
   {
	   	 
       controlPartA(barHeights, blockHeights);

   }
   
   
   
	   
   
   public void controlPartA(int [] barHeights, int [] blockHeights)
   {
		
	  int h = 13, w = 1, d = 0;
	 
	  int  height,sourceHt, targetPile1Ht, targetPile2Ht,targetPile1,targetPile2,pileht2,pileht1;
	       
	  int target = 8;
	  
	  int i,j,t,s;
	  
      targetPile1Ht = 10;
     
      targetPile2Ht = 9;
      
      sourceHt = 0;
      targetPile1 = 1;
      targetPile2 =2 ;
      pileht1 = 0;
      pileht2=0;
      height = 4;
 
      int min = blockHeights[0];
	  int mxm = barHeights[0];
	  for(j=0;j < barHeights.length;j++){
		  
		  if (barHeights[j]>mxm){
	  			
	  		mxm = barHeights[j];
	  		}
	  		
	  }
	  
	  	for(j=0;j < blockHeights.length;j++){
		  
		  if (blockHeights[j]>min){
	  			
	  		min = blockHeights[j];
	  		}
	  		
	  	}
	  
  
      for (s=0; s < blockHeights.length; s++){
		  sourceHt+=blockHeights[s]; 
   }
      



      for (t= blockHeights.length-1;t > -1;t--){
	  
  
		   while( (h-1) - d > sourceHt)
			  {
			     r.lower();
			     d++;	     
			  }
		   sourceHt = sourceHt- blockHeights[t];

		   r.pick();
	  
			  
		
		  		
		  
				while (d > h -2 - (mxm + min)  )
				{				
					
					r.raise();
					d--;
					
				 }
		  		
			   while( d > h-1 - sourceHt)
			    {
				  
				   r.raise();
				   d--;
			    } 					 
		  
		   
		  
		  
		   
		   
		   
		   if (blockHeights[t] == 1)	  
  			{
			   while ( w < targetPile1Ht )
		   		{	   
			   		r.extend(); 
			   		w++;		  
		   		}	
  			
  			
  			}
 
		   if(blockHeights[t] == 2)
			  	{
			  
				  while ( w < targetPile2Ht )
			   		{	   
				   		r.extend(); 
				   		w++;		  
			   		}
			  	}		   
		   if    (blockHeights[t]==3)
	  		{ 
		  	while ( w < target )
	   		{	   
		   		r.extend(); 
		   		w++;		  
	   		}
		  	target = target - 1 ;
		  
	  		}
		
	
		
			 if(blockHeights[t] == 3){
			
				 
				 if(target == 7){
						
					  while ( (h-1)-d > blockHeights[t] + barHeights[5])
							  { 
						  r.lower();
						  d++;	 
					
					
					      }
			
			

				    	 }
				 if(target == 6){
						
					  while ( (h-1)-d > blockHeights[t] + barHeights[4])
							  { 
						  r.lower();
						  d++;	 
					
					
					      }

				    	 }
				 if(target == 5){
						
					  while ( (h-1)-d > blockHeights[t] + barHeights[3])
							  { 
						  r.lower();
						  d++;	 
					
					
					      }

				    	 }
				 if(target == 4){
						
					  while ( (h-1)-d > blockHeights[t] + barHeights[2])
							  { 
						  r.lower();
						  d++;	 
					
					
					      }

				    	 }
				 if(target == 3){
						
					  while ( (h-1)-d > blockHeights[t] + barHeights[1])
							  { 
						  r.lower();
						  d++;	 
					
					
					      }

				    	 }
				 if(target == 2){
						
					  while ( (h-1)-d > blockHeights[t] + barHeights[0])
							  { 
						  r.lower();
						  d++;	 
					
					
					      }

				    	 }
				 }
	 
		  
	   if (blockHeights[t] ==1){
					  while ( (h-1) - d > (blockHeights[t] + pileht1))   
						
					  {		
						
					   r.lower();
					   d++;
					   
					  }
					 
		
			}
		  if (blockHeights[t] ==2){
				  while ( (h-1) - d > (blockHeights[t] + pileht2))   
					
				  {			
				   r.lower();
				   d++;
				   
				  }
				 
			}
		  
		        
		  
			
		  
		  
		  
		  if (blockHeights[t] == 1)	  
			{
				
				pileht1 = pileht1 + targetPile1;
			
			}
		   if (blockHeights[t] == 2)	  
			{
				
				pileht2 = pileht2 + targetPile2;
			
			}
	  
		  r.drop();
		
		
		  
		  
		  
		  
		  		
		  	
				while (d > h -1 - (mxm + min))
				{				
					
					r.raise();
					d--;
					
				 }
		  		
			   while( d > h-1 - (sourceHt))
			    {
				  
				   r.raise();
				   d--;
			    } 					 
		  
		   while ( w > 1 )
		  
		   {
			   r.contract();
			   w--;
		   }
	  }
   }
	
}



