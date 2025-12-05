{/* [New Replacement 1] Community Pulse - 替换 Active Quest */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="col-span-1 bento-card p-5 flex flex-col justify-between group hover:border-primary/50 cursor-pointer"
        >
           <div className="flex items-center justify-between mb-3">
             <div className="flex items-center gap-2">
               <Hash className="w-4 h-4 text-primary" />
               <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Community Pulse</p>
             </div>
             <span className="text-[10px] text-muted-foreground">{communityPost.time}</span>
           </div>
           
           <div className="flex-1">
             <div className="flex items-center gap-2 mb-2">
                <img src={communityPost.author.avatar} className="w-6 h-6 rounded-full" alt={communityPost.author.name} />
                <span className="text-sm font-medium text-foreground">{communityPost.author.name}</span>
             </div>
             <p className="text-sm text-foreground/90 leading-snug line-clamp-3 mb-3">
               {communityPost.content}
             </p>
             <div className="flex gap-2 mb-3">
                {communityPost.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded-md">{tag}</span>
                ))}
             </div>
           </div>

           <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border/50 pt-3">
             <div className="flex items-center gap-1 group-hover:text-red-500 transition-colors">
               <Heart className="w-3.5 h-3.5" /> {communityPost.likes}
             </div>
             <div className="flex items-center gap-1 group-hover:text-blue-500 transition-colors">
               <MessageSquare className="w-3.5 h-3.5" /> {communityPost.comments}
             </div>
           </div>
        </motion.div>

        {/* [New Replacement 2] Live Workshop - 替换 Daily Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-1 md:col-span-2 bento-card relative overflow-hidden group cursor-pointer"
        >
          {/* 背景图 */}
          <div className="absolute inset-0">
            <img src={upcomingWorkshop.image} className="w-full h-full object-cover opacity-20 dark:opacity-30 group-hover:scale-105 transition-transform duration-700" alt="Workshop" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>

          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-primary/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                 <Radio className="w-3 h-3 animate-pulse" />
                 {upcomingWorkshop.time}
              </div>
              <div className="bg-background/50 backdrop-blur-md text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border/50">
                 {upcomingWorkshop.date}
              </div>
            </div>
            
            <div className="mt-4">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {upcomingWorkshop.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                <span>Hosted by <span className="text-foreground font-medium">{upcomingWorkshop.host}</span></span>
                <span>•</span>
                <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {upcomingWorkshop.attendees} joined</span>
              </p>
              
              <button className="bg-foreground text-background text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-all active:scale-95 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                RSVP Now
              </button>
            </div>
          </div>
        </motion.div>