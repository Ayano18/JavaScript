import java.util.*;

public class main{
    public static void main(String[] args) {
        System.out.println(defaultvalue(5, null));

        System.out.println(defaultvalue(5, 10));
    }

    static int defaultvalue(int a, Integer b){
        if (b == null) {
            b = 5;
        }
        return a * b;
    }
}