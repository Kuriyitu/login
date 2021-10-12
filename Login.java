

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.simple.Jsoner;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

/**
 * Servlet implementation class First
 */
@WebServlet("/login")
public class Login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public ResultSet crud(String sql,String type) throws ClassNotFoundException, SQLException
    {
    	Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/vigneshdb", "root","");
         Statement stmt = con.createStatement();
         if(type.equalsIgnoreCase("get"))
         {
             ResultSet result= stmt.executeQuery(sql);
             return result;
             
         }
         if(type.equalsIgnoreCase("update"))
         {
        	 stmt.executeUpdate(sql);
         }
		return null;
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		try {
		 PrintWriter out = response.getWriter();			
         String sql ="select * from login";
         ResultSet result = crud(sql,"get");	
         JSONObject jsonObject=new JSONObject();
		
		JSONArray array=new JSONArray();
		 while(result.next()){
	         JSONObject tempObject=new JSONObject();   
	            tempObject.put("id", result.getString("emailId"));
	            tempObject.put("password", result.getString("password"));
	            array.put(tempObject);
	            
		 }
		 jsonObject.put("login", array);
		 out.print(jsonObject);
	}
		 catch (ClassNotFoundException | SQLException | JSONException e) {
			 PrintWriter out = response.getWriter();			
			 out.print("error");
				e.printStackTrace();
			}
			

	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		try {
		StringBuilder buffer = new StringBuilder();
   	    BufferedReader reader = request.getReader();
   	    String line;
   	    while ((line = reader.readLine()) != null) {
   	        buffer.append(line);
   	        buffer.append(System.lineSeparator());
   	    }
   	    	String data = buffer.toString();
     		JSONObject jsonObject = new JSONObject(data);
	        JSONObject object=new JSONObject();
	        object=(JSONObject) jsonObject.get("login");    
	         String   sql = "INSERT INTO login VALUES('"+(String) object.get("emailId")+"','"+(String) object.get("password")+"')";  
	         crud(sql,"update");   
			 PrintWriter out = response.getWriter();			
			 out.print("success");
	         
		}
		catch (   SQLException | ClassNotFoundException | JSONException e) {
			 PrintWriter out = response.getWriter();			
			 out.print("error");
			e.printStackTrace();
		}
	}

}
