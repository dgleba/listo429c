
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
#@  
#@  posts id desc

#@  
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   2020-04-11[Apr-Sat]10-23AM 


select 
      doc -> 'title' as title,              doc -> 'body' as body,
      doc -> 'statusfld' as statusfld,    
      -- doc -> 'pstatus' as pstatus,
      doc -> '_id' as _id,
      doc -> 'updatedat' as updatedat,          doc -> 'updated' as updated,
      doc -> 'createdat' as created,       doc -> 'profilename' as profilename,
      doc -> 'rtype' as rectype, doc -> 'pcomment' as pcomment
      --  doc -> 'name' as name
from poststbl
  WHERE doc ->> 'rtype' = 'mlist'  
      and doc ->> 'updated' is not null 
   -- and doc ->> 'body' like '%%' 
   -- and doc ->> 'statusfld' like '%order%' or doc ->> 'statusfld' like '%prWrk%' or doc ->> 'pstatus' like '%zx%'
    -- need ->> operator to make it text
ORDER BY doc->>'updated' desc
limit 1500;





#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
#@  
#@  posts-work-orders
#@  
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   2020-04-11[Apr-Sat]10-24AM 


select 
	  doc -> 'title' as title,              doc -> 'body' as body,
	  doc -> 'statusfld' as statusfld,    
	  doc -> 'pstatus' as pstatus, doc -> 'pcomment' as pcomment,
	  doc -> '_id' as _id, doc -> 'profilename' as profilename,
	  doc -> 'updatedat' as updatedat,          doc -> 'updated' as updated,
	  doc -> 'createdat' as created,          doc -> 'rtype' as rectype
	  --  doc -> 'name' as name
from poststbl
  WHERE doc ->> 'rtype' = 'mlist'  
   -- and doc ->> 'body' like '%%' 
   and doc ->> 'statusfld' like '%order%' or doc ->> 'statusfld' like '%prWrk%' or doc ->> 'pstatus' like '%zx%'
	-- need ->> operator to make it text

ORDER BY doc->>'_id' desc
limit 1500;



#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
#@  
#@  maintdb2-posts-work-orders
#@  
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@   2020-04-11[Apr-Sat]10-25AM 


select 
	  doc -> 'title' as title,              doc -> 'body' as body,
	  doc -> 'statusfld' as statusfld,    
	  doc -> 'pstatus' as pstatus, doc -> 'pcomment' as pcomment,
	  doc -> '_id' as _id, doc -> 'profilename' as profilename,
	  doc -> 'updatedat' as updatedat,      doc -> 'updated' as updated,
	  doc -> 'createdat' as created,        doc -> 'rtype' as rectype
	  --  doc -> 'name' as name
from poststbl
  WHERE doc ->> 'rtype' = 'mlist'  
   -- and doc ->> 'body' like '%%' 
   and doc ->> 'statusfld' like '%order%' or doc ->> 'statusfld' like '%prWrk%' or doc ->> 'pstatus' like '%zx%'
	-- need ->> operator to make it text

ORDER BY doc->>'_id' desc
limit 1500;


