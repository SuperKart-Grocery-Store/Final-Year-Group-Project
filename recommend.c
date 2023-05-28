#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#define size 10
#define hashed / 10000
struct node
{
    int data;
    int quantity;
    struct node *left;
    struct node *right;
    
};

struct node *chain[size];
struct node *last;

void init()
{
    int i;
    for(i = 0; i < size; i++) {
        chain[i] = NULL;
        //last[i] = NULL;
    }
}

void insert(int value,int qua)
{
    //create a newnode with value
    
    struct node *newNode = malloc(sizeof(struct node));
    newNode->data = value;
    newNode->quantity = qua;

    //calculate hash key
    
    int key = value hashed;

    //check if chain[key] is empty
    
    if(chain[key] == NULL) {
        newNode->left = newNode;
    	newNode->right = newNode;
    	chain[key] = newNode;
        last = chain[key];
    }
    
	//collision occurence
	
    else
    {
        //add the node at the begining of chain[key] to keep track of MRU node.
        last = chain[key]->left;
        newNode->right = chain[key];
        newNode->left = last;
		chain[key]->left = newNode;
        chain[key] = newNode;
        last->right = chain[key];
        
    }
}

void print()
{
    int i;

    for(i = 0; i < size; i++)
    {
        struct node *temp = chain[i];
        printf("chain[%d] <--> ", i);
        
		if (!temp)
        printf("NULL");
        
        else
		{
			do {
				printf("%d <--> ", temp->data);
				temp = temp->right;
			} while (temp->data != chain[i]->data);
    	}
    	printf("\n");
    }
}
struct node* searchrecommend(int value)
{
	struct node *temp;
	int key = value hashed;
	
	temp = chain[key];
	
	if (!temp) return 0;
	
	while(temp->data != value)
	{
		if(temp->right == chain[key]) 
        {

            return NULL;
        }
		temp = temp->right;
	}

    printf("%d %d %d", temp->right->data, temp->left->data, temp->data);
	
    chain[key] = temp;
	
    return temp;
}

void aislerack(int tosearch)
{
    struct node* present = searchrecommend(tosearch);
    if(present!=NULL)
    {
        int aisle;
        int rack;
        int category;

        category=tosearch hashed;
        aisle=(tosearch%10000)/100;
        rack=(tosearch%10000)%100;

        printf("Product belongs to Category %d in Aisle No. %d at Rack No. %d",category,aisle,rack);

        if(present->quantity>0)
        printf("\nProduct IN STOCK.\nCurrent Stock=%d",present->quantity);
        else
        printf("\nProduct OUT OF STOCK");

    }
    else
    {
        printf("Not present");
    }
}

int main(int argc, char *argv[])
{
     
    
 FILE* f = fopen("C:/Users/91797/finalyr/c files/ProductDatabase2.csv", "a+");
 char buffer[1024];
    int vals[25];
    int quans[25];
    int readid = 5,j=0,k=0;
    int readquan=2,m=0;
 if (!f)
        printf("Can't open file\n");
    while (fgets(buffer, sizeof(buffer), f)) 
    {        
        char* token = strtok(buffer, ",");
        for (int i = 0; i < 7; i++) {
            if (i == 0) 
            {
                // Read the first `read=5` characters of the first value/token i.e. Product ID
                char first_chars[6];
                strncpy(first_chars, token,readid);
                first_chars[readid] = '\0';
                
                if(k!=0)
                {
                    //printf("Product ID: %s\n",first_chars);
                    vals[j]=atoi(first_chars);
                    
                    j++;
                }
            }
            if(i==2)
            {
                // Read 2 characters of the third value/token i.e. Quantity
                char quantity[3];
                strncpy(quantity, token,readquan);
                quantity[readquan] = '\0';
                
                if(k!=0)
                {
                    //printf("Quantity: %s\n",quantity);
                    quans[m]=atoi(quantity);
                    
                    m++;
                }

            }

            // Move to the next value
            token = strtok(NULL, ",");
        }
        k++;//tracks line number so that heading "Product" and "Quantity" not put in array of vals and quans
        
    }       

        for(int i=0;i<=j;i++)
        {
            //printf("%d ",vals[i]);
            insert(vals[i],quans[i]);
            
        }
        
        /* printf("Values in Hash Table:\n");
        print();

        printf("Enter Product ID to search:");
        scanf("%d",&tosearch);
 */     int tosearch=atoi(argv[1]);  
        searchrecommend(tosearch);      

fclose(f);
return 0;

}

    /* FILE* fp = fopen(""C:/Users/91797/finalyr/c files/ProductDatabase2.csv", "a+");  
    if (!fp)
        printf("Can't open file\n");

    else {
        char Category[50];
        int ProdID, Quantity, AisleNo, RackNo, isCurAcc, isStocked, cate;
    
        // Asking user input for the new record to be added
        printf("\nEnter Product ID:\n");
        scanf("%d", &ProdID);

        cate=ProdID hashed;
        AisleNo=(ProdID%10000)/100;
        RackNo=(ProdID%10000)%100;

        printf("\nEnter Category:\n");
        scanf("%s", &Category);

        printf("\nEnter Quantity:\n");
        scanf("%d", &Quantity);

        printf("\nEnter 1 if isCurrentlyAccessed else 0:\n");
        scanf("%d", &isCurAcc);
        printf("\nEnter 1 if isStocked else 0:\n");
        scanf("%d", &isStocked);
    
        fprintf(fp, "%d, %s, %d, %d, %d, %d, %d\n", ProdID,	Category, Quantity, AisleNo, RackNo, isCurAcc, isStocked);
    
        printf("\nNew record added to Database");
    fclose(fp);
        
    } */