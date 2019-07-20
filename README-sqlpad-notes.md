example query.

```
    select
          doc -> 'title' as title,
          doc -> 'body' as body,
          doc -> 'statusfld' as statusfld,
          doc -> '_id' as _id,
          doc -> 'updatedat' as updatedat,
          doc -> 'updated' as updated,
          doc -> 'createdat' as created,
          doc -> 'rtype' as rectype
          --  doc -> 'name' as name
    from poststbl
      WHERE doc ->> 'rtype' = 'mlist'

      -- and doc ->> 'body' like '%%' and doc ->> 'statusfld' like '%order%'
        -- need ->> operator to make it text

    ORDER BY doc->>'_id' desc
    limit 322;
```
