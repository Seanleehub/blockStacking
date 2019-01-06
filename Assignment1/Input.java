import java.io.*;
import java.text.DecimalFormat;
import java.applet.*;
import java.util.Calendar;
import java.util.GregorianCalendar;





public class Input {

	/**
	 * @param args
	 */

		public static void main(String[] args) throws IOException{
			// TODO Auto-generated method stub
			 BufferedReader stdin = new BufferedReader
	          (new InputStreamReader (System.in));
			 
			 System.out.println("Assignment1 by Sean Lee (3301214)");
	      // Product Code
	      String productc;

	      System.out.println("Please Input Product Code");
	      productc = stdin.readLine();

	      
	      //Description
	      String descr;
	      
	      System.out.println("Please Input Description");
	      descr = stdin.readLine();
	   
	      
	      //Unit Price
	      String string1;
	      double num1;
	      
	      DecimalFormat money = new DecimalFormat("0.00");
	      
	      System.out.println ("Please Input Unit Price");
	      string1 = stdin.readLine();
	      num1 = Double.parseDouble(string1);
	     
  
	      //Input Quantity
	      String string2;
	      int num2;
	      
	      
	      
	      System.out.println ("Please Input Quantity");
	      string2 = stdin.readLine();
	      num2 = Integer.parseInt(string2);
	     
	      
	      // Additional Discount
	      String string3;
	      double num3;
	       
	      System.out.println ("Please Input Additional Discount");
	      string3 = stdin.readLine();
	      num3 = Double.parseDouble(string3);
	     
	     
	      //Name of Sales assistant authorizing the account
	      String salesA;
	      
	      System.out.println("Please Input Name of Sales Assistant authorizing the discount");
	      salesA = stdin.readLine();
	      
	      //Purchase Sub Total
	    
	      double sum;
	      
	    
	      sum = num1 * num2 ;
	    

	      //discount
	      double sum2;
	      float z = 100;
	      int a = 5;
	      int multi;
	      int b = 10;
	
	      multi = num2 / a;
	
	      
	      sum2 = multi * (num1 * (b / z)) * 5;
	     
	      //final sale amount
	      double fsale;
	      
	      fsale = sum - sum2 - num3;
	      
	      //gst
	      double gst;
	      gst = fsale * 0.09;
	      
	      GregorianCalendar currentDate = new GregorianCalendar();
	      String currentTime = currentDate.getTime().toString();
	      
	      
	      //Additional discount string
	      
	      String addd;
	      addd = "Additional Discount" + "<" + salesA  +">:";
	      
	      
	      
	      
	      //displaying the input
	      
	      
	     
	      System.out.printf("Product Code: " + productc);
	      System.out.println();
	      System.out.printf("Product Description: " + descr);
	      System.out.println();
	      System.out.printf("Unit Price: " + money.format(num1));
	      System.out.println();
	      System.out.printf("Quantity: " + num2);
	      System.out.println();
	      System.out.printf("Additional Discount: " + money.format(num3));
	      System.out.println();
	      System.out.printf("Authorising salesperson: " + salesA);
	      System.out.println();
	      
	      System.out.print("---------------------------Hardly Normal Proof of Sale---------------------------");
	      System.out.println();
	      
	      System.out.printf(" %11s  %-30s   %-11s   %-4s   %-11s" , "Prod. Code" , "Product Description"  , "Unit Price" , "Qty", "Total");
	      System.out.println();
	      System.out.printf(" %-11s  %30s   %-11s   %-4s   %-11s" , "-----------", "------------------------------" , "-----------", "----","-----------");
	      System.out.println();
	      System.out.printf(" %-11s  %-30s  %1s  %9s   %4s  %1s %10s" , productc , descr , "$", money.format(num1) ,num2 , "$", money.format(sum));
	      System.out.println();
	      System.out.printf(" %-11s  %30s   %-11s   %-4s   %11s" , " ", " " , " ", " ","-----------");
	      System.out.println();
	      System.out.printf(" %-11s  %30s   %11s   %4s   %11s" , " ", " " , "Sub-Total:", "$",money.format(sum));
	      System.out.println();
	      System.out.println();
	      System.out.printf(" %-11s  %21s   %20s   %4s   %11s %1s" , " ", " " , "Multi-Buy Discount:", "$",money.format(sum2),"-");
	      System.out.println();
	      System.out.printf(" %57s %6s %13s %1s" , addd , "$",money.format(num3),"-");
	      System.out.println();
	      System.out.printf(" %-11s  %30s   %-11s   %-4s   %11s" , " ", " " , " ", " ","-----------");
	      System.out.println();
	      System.out.printf(" %-11s  %30s   %11s   %4s   %11s" , " ", " " , "Total:", "$",money.format(fsale));
	      System.out.println();
	      System.out.printf(" %-11s  %30s   %11s   %4s   %11s" , " ", " " , "GST Paid:", "$",money.format(gst));
	      System.out.println();
	      System.out.printf(" %-13s  %10s   %11s   %4s   %11s" , " ", " " , " ", "Date:",currentTime);
	      System.out.println();

	    
	}
		
}




