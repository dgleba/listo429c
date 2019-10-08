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

# Session times out at 1 hour. It's too short.

https://github.com/rickbergfalk/sqlpad/issues/408

-Yes setting the environment variable `SQLPLAD_SESSION_MINUTES` should hopefully accomplish what you need.
-In 3 beta.2 you can create your own file, name it anything, put it anywhere, use JSON or INI, and then tell SQLPad where it is at using cli flag --config=path/to/file or env var SQLPAD_CONFIG=path/to/file
-If you are using docker, I'd recommend going the environment variable route personally

https://github.com/rickbergfalk/sqlpad/pull/473/files#diff-9e4a215b4f5f613a802fa43d8ab35270
server/app.js
cookie: { maxAge: 1000 _ 60 _ sessionMinutes },

# .
